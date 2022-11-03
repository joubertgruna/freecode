import { createAction } from 'redux-actions';

import { getLines } from '../../../../../utils/get-lines';
import { actionTypes } from './action-types';

export const createFiles = createAction(
  actionTypes.createFiles,
  challengeFiles =>
    challengeFiles.map(challengeFile => ({
      ...challengeFile,
      seed: challengeFile.contents.slice(),
      editableContents: getLines(
        challengeFile.contents,
        challengeFile.editableRegionBoundaries
      ),
      seedEditableRegionBoundaries:
        challengeFile.editableRegionBoundaries?.slice()
    }))
);

export const createQuestion = createAction(actionTypes.createQuestion);
export const initTests = createAction(actionTypes.initTests);
export const updateTests = createAction(actionTypes.updateTests);
export const cancelTests = createAction(actionTypes.cancelTests);

export const initConsole = createAction(actionTypes.initConsole);
export const initLogs = createAction(actionTypes.initLogs);
export const updateChallengeMeta = createAction(
  actionTypes.updateChallengeMeta
);
export const updateFile = createAction(actionTypes.updateFile);
export const updateConsole = createAction(actionTypes.updateConsole);
export const updateLogs = createAction(actionTypes.updateLogs);
export const updateJSEnabled = createAction(actionTypes.updateJSEnabled);
export const updateSolutionFormValues = createAction(
  actionTypes.updateSolutionFormValues
);
export const updateSuccessMessage = createAction(
  actionTypes.updateSuccessMessage
);

export const logsToConsole = createAction(actionTypes.logsToConsole);

export const lockCode = createAction(actionTypes.lockCode);
export const unlockCode = createAction(actionTypes.unlockCode);
export const disableBuildOnError = createAction(
  actionTypes.disableBuildOnError
);
export const storedCodeFound = createAction(actionTypes.storedCodeFound);
export const noStoredCodeFound = createAction(actionTypes.noStoredCodeFound);
export const saveEditorContent = createAction(actionTypes.saveEditorContent);

export const closeModal = createAction(actionTypes.closeModal);
export const openModal = createAction(actionTypes.openModal);

export const previewMounted = createAction(actionTypes.previewMounted);
export const projectPreviewMounted = createAction(
  actionTypes.projectPreviewMounted
);

export const storePortalDocument = createAction(
  actionTypes.storePortalDocument
);
export const removePortalDocument = createAction(
  actionTypes.removePortalDocument
);

export const challengeMounted = createAction(actionTypes.challengeMounted);
export const checkChallenge = createAction(actionTypes.checkChallenge);
export const executeChallenge = createAction(actionTypes.executeChallenge);
export const resetChallenge = createAction(actionTypes.resetChallenge);
export const stopResetting = createAction(actionTypes.stopResetting);
export const submitChallenge = createAction(actionTypes.submitChallenge);
export const resetAttempts = createAction(actionTypes.resetAttempts);
export const updateTestsRunning = createAction(actionTypes.updateTestsRunning);

export const setEditorFocusability = createAction(
  actionTypes.setEditorFocusability
);
export const toggleVisibleEditor = createAction(
  actionTypes.toggleVisibleEditor
);
