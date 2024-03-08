import fastifyOauth2 from '@fastify/oauth2';
import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';
import jwt from 'jsonwebtoken';
import fp from 'fastify-plugin';

import {
  API_LOCATION,
  AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET,
  AUTH0_DOMAIN,
  JWT_SECRET
} from '../utils/env';
import { getRedirectParams } from '../utils/redirection';

/**
 * Fastify plugin for Auth0 authentication. This uses fastify-plugin to expose
 * the auth0OAuth decorator (for easier testing), but to maintain encapsulation
 * it should be registered in a plugin. That prevents auth0OAuth from being
 * available globally.
 *
 * @param fastify - The Fastify instance.
 * @param _options - The plugin options.
 * @param done - The callback function.
 */
export const auth0Client: FastifyPluginCallbackTypebox = fp(
  (fastify, _options, done) => {
    // @ts-expect-error - when using discovery, client.auth is not allowed by the
    // code, but required by the types.
    void fastify.register(fastifyOauth2, {
      name: 'auth0OAuth',
      scope: ['openid', 'email', 'profile'], // TODO: check what scopes the api-server uses
      credentials: {
        client: {
          id: AUTH0_CLIENT_ID,
          secret: AUTH0_CLIENT_SECRET
        }
      },
      startRedirectPath: '/signin',
      discovery: { issuer: `https://${AUTH0_DOMAIN}` },
      callbackUri: `${API_LOCATION}/auth/auth0/callback`,
      generateStateFunction: request => {
        return jwt.sign(getRedirectParams(request), JWT_SECRET);
      },
      checkStateFunction: (_state, callback) => {
        return callback(new Error('Not implemented'));
      }
    });

    fastify.get('/auth/auth0/callback', async function (request, reply) {
      let token;
      try {
        token = (
          await this.auth0OAuth.getAccessTokenFromAuthorizationCodeFlow(request)
        ).token;
      } catch (error) {
        const uri = await fastify.auth0OAuth.generateAuthorizationUri(
          request,
          reply
        );
        return reply.redirect(302, uri);
      }

      // TODO: use userinfo.email to find or create a user
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const userinfo = await fastify.auth0OAuth.userinfo(token);

      // TODO: implement whatever redirects and set-cookieing the api-server does
      void reply.send({ msg: 'success' });
    });

    done();
  }
);
