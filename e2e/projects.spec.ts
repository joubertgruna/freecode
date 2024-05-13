import { execSync } from 'child_process';
import { test, expect } from '@playwright/test';
import { SuperBlocks } from '../shared/config/superblocks';
import curriculum from './fixtures/js-ads-projects.json';
import {
  focusProjectEditor,
  getProjectEditors,
  clearProjectEditor
} from './utils/project-editor';
import { authedPost } from './utils/request';

test.use({ storageState: 'playwright/.auth/certified-user.json' });

interface Meta {
  challengeOrder: { id: string; title: string }[];
}

interface File {
  contents: unknown;
  fileKey: string;
}

type Solution = File[];

interface Challenge {
  title: string;
  block: string;
  superBlock: string;
  dashedName: string;
  solutions: Solution[];
  isPrivate?: boolean;
}

interface block {
  [key: string]: {
    meta: Meta;
    challenges: Challenge[];
  };
}

const pythonProjects = {
  superBlock: SuperBlocks.MachineLearningPy,
  block: 'machine-learning-with-python-projects',
  challenges: [
    {
      slug: 'book-recommendation-engine-using-knn',
      nextChallengeText: 'Linear Regression Health Costs Calculator'
    },
    {
      slug: 'cat-and-dog-image-classifier',
      nextChallengeText: 'Book Recommendation Engine using KNN'
    },
    {
      slug: 'linear-regression-health-costs-calculator',
      nextChallengeText: 'Neural Network SMS Text Classifier'
    },
    {
      slug: 'neural-network-sms-text-classifier',
      nextChallengeText: 'Find the Symmetric Difference'
    },
    {
      slug: 'rock-paper-scissors',
      nextChallengeText: 'Cat and Dog Image Classifier'
    }
  ]
};

test.describe('Projects', () => {
  test('Should be possible to submit Python projects', async ({ page }) => {
    const { superBlock, block, challenges } = pythonProjects; // Ensure these are defined or imported

    for (const { slug } of challenges) {
      const url = `/learn/${superBlock}/${block}/${slug}`;
      await page.goto(url);
      await page
        .locator('#dynamic-front-end-form #solution')
        .fill('https://replit.com/@camperbot/python-project#main.py');

      await page.locator("text=I've completed this challenge").click();
      await expect(page.locator('text=go to next challenge')).toBeVisible();
    }
  });
});

test.describe('JavaScript projects can be submitted and then viewed in /settings and on the certifications', () => {
  test.beforeAll(() => {
    execSync('node ./tools/scripts/seed/seed-demo-user');
  });

  test('projects are submitted and viewed correctly', async ({
    page,
    browserName,
    isMobile,
    request
  }) => {
    test.setTimeout(40000);

    const block: block = curriculum;
    const targetBlock = 'javascript-algorithms-and-data-structures-projects';
    const javaScriptSuperBlock = block[targetBlock];

    const { challenges, meta } = javaScriptSuperBlock || {
      challenges: [],
      meta: {}
    };

    const projectTitles =
      meta.challengeOrder?.map(({ title }: { title: string }) => title) ?? [];

    const projectsInOrder = projectTitles.map(title =>
      challenges.find(challenge => challenge.title === title)
    ) as Challenge[];

    const expectedPaths = [
      '/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker',
      '/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter',
      '/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher',
      '/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator',
      '/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register'
    ];

    const projectIdsInOrder = [
      'aaa48de84e1ecc7c742e1124',
      'a7f4d8f2483413a6ce226cac',
      '56533eb9ac21ba0edf2244e2',
      'aff0395860f5d3034dc0bfc9',
      'aa2e6f85cab2ab736c9a9b24'
    ];

    expectedPaths.push('/learn/javascript-algorithms-and-data-structures/');

    const contents = projectsInOrder[0].solutions[0][0].contents as string;

    // Test the direct flow once.
    // Use the `testing=true` parameter to prevent the editor
    // from automatically adding a closing bracket.
    await page.goto(
      '/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker?testing=true'
    );

    const editor = await getProjectEditors({ page, isMobile });
    await focusProjectEditor({ page, browserName, isMobile });
    await clearProjectEditor({ page, browserName });

    await editor.fill(contents);

    await page.getByRole('button', { name: 'Run' }).click();

    await page
      .getByRole('button', { name: 'Go to next challenge', exact: false })
      .click();

    // Submit the rest with the API.

    for (let i = 1; i < projectsInOrder.length; i++) {
      await authedPost(request, '/modern-challenge-completed', {
        id: projectIdsInOrder[i],
        challengeType: 5,
        files: projectsInOrder[i].solutions[0].map(({ contents }) => ({
          contents: contents,
          key: 'scriptjs',
          ext: 'js',
          name: 'script',
          history: ['script.js']
        }))
      });
    }

    await page.goto('/settings');

    for (const projectTitle of projectTitles) {
      await page.getByTestId(projectTitle).click();
      const solutionModal = page.getByRole('dialog', {
        name: `Solution for ${projectTitle}`
      });
      await expect(solutionModal).toBeVisible();
      await solutionModal
        .getByRole('button', { name: 'Close' })
        .first()
        .click();
      // Wait for the modal to disappear before continue
      await expect(solutionModal).toBeHidden();
    }

    await page
      .getByRole('button', {
        name: "I agree to freeCodeCamp's Academic Honesty Policy."
      })
      .click();

    const selector = 'button-for-javascript-algorithms-and-data-structures';
    await expect(page.getByTestId(selector)).toContainText(
      'Claim Certification'
    );
    await page.getByTestId(selector).click();
    await expect(page.getByTestId(selector)).toContainText(
      'Show Certification'
    );
  });

  // test('Ctrl + enter triggers the completion modal on multifile projects', async ({
  //   page,
  //   browserName,
  //   isMobile
  // }) => {
  //   await page.goto(
  //     '/learn/2022/responsive-web-design/build-a-tribute-page-project/build-a-tribute-page?testing=true'
  //   );

  //   const editor = getEditors(page);
  //   await focusEditor({ page, browserName, isMobile });
  //   await clearEditor({ page, browserName });

  //   await editor.evaluate((element, value) => {
  //     (element as HTMLTextAreaElement).value = value;
  //     element.dispatchEvent(new Event('input', { bubbles: true }));
  //   }, 'console.log("Hello, World!");');

  //   await page.keyboard.press('Control+Enter');
  //   await expect(page.locator('[data-cy="completion-modal"]')).toBeVisible();
  // });
});
