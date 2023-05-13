import { Component, ReactElement } from 'react';
import ReactDOM from 'react-dom';
import type { TFunction } from 'i18next';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {
  storePortalWindow,
  removePortalWindow,
  setShowPreviewPortal,
  setShowPreviewPane,
  setIsAdvancing
} from '../redux/actions';
import {
  showPreviewPortalSelector,
  portalWindowSelector,
  isAdvancingToChallengeSelector
} from '../redux/selectors';
import { MAX_MOBILE_WIDTH } from '../../../../../config/misc';

interface PreviewPortalProps {
  children: ReactElement | null;
  windowTitle: string;
  t: TFunction;
  storePortalWindow: (window: Window | null) => void;
  removePortalWindow: () => void;
  showPreviewPortal: boolean;
  portalWindow: null | Window;
  setShowPreviewPortal: (arg: boolean) => void;
  setShowPreviewPane: (arg: boolean) => void;
  setIsAdvancing: (arg: boolean) => void;
  isAdvancing: boolean;
}

const mapDispatchToProps = {
  storePortalWindow,
  removePortalWindow,
  setShowPreviewPortal,
  setShowPreviewPane,
  setIsAdvancing
};

const mapStateToProps = createSelector(
  isAdvancingToChallengeSelector,
  showPreviewPortalSelector,
  portalWindowSelector,
  (
    isAdvancing: boolean,
    showPreviewPortal: boolean,
    portalWindow: null | Window
  ) => ({
    isAdvancing,
    showPreviewPortal,
    portalWindow
  })
);

class PreviewPortal extends Component<PreviewPortalProps> {
  static displayName = 'PreviewPortal';
  mainWindow: Window;
  externalWindow: Window | null = null;
  isAdvancing: boolean;
  containerEl;
  titleEl;
  styleEl;

  constructor(props: PreviewPortalProps) {
    super(props);
    this.mainWindow = window;
    this.externalWindow = this.props.portalWindow;
    this.isAdvancing = this.props.isAdvancing;
    this.containerEl = document.createElement('div');
    this.titleEl = document.createElement('title');
    this.styleEl = document.createElement('style');
  }

  componentDidMount() {
    const { t, windowTitle } = this.props;

    if (!this.externalWindow) {
      this.externalWindow = window.open(
        '',
        '',
        'width=960,height=540,left=100,top=100'
      );
    } else {
      this.externalWindow.document.head.innerHTML = '';
      this.externalWindow.document.body.innerHTML = '';
    }

    this.titleEl.innerText = `${t(
      'learn.editor-tabs.preview'
    )} | ${windowTitle}`;

    this.styleEl.innerHTML = `
      #fcc-main-frame {
        width: 100%;
        height: 100%;
        border: none;
      }
    `;

    this.externalWindow?.document.head.appendChild(this.titleEl);
    this.externalWindow?.document.head.appendChild(this.styleEl);
    this.externalWindow?.document.body.setAttribute(
      'style',
      `
        margin: 0px;
        padding: 0px;
        overflow: hidden;
      `
    );
    this.externalWindow?.document.body.appendChild(this.containerEl);
    this.externalWindow?.addEventListener('beforeunload', () => {
      this.props.setShowPreviewPortal(false);
      if (this.mainWindow.innerWidth < MAX_MOBILE_WIDTH) {
        this.props.setShowPreviewPane(true);
      }
      this.props.removePortalWindow();
    });

    this.props.storePortalWindow(this.externalWindow);

    // close the portal if the main window closes
    this.mainWindow?.addEventListener('beforeunload', () => {
      this.externalWindow?.close();
    });
  }

  componentWillUnmount() {
    this.props.setIsAdvancing(false);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.containerEl);
  }
}

PreviewPortal.displayName = 'PreviewPortal';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(PreviewPortal));
