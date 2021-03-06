import INTRODUCTION_DATA from '../../data/IntroductionData';
import CHILD_PROTECTION_DATA from '../../data/ChildProtectionData';
import GUIDELINE_DATA from '../../data/GuidelineData';

const initialState = { // Initial state of the data
    introductionData: INTRODUCTION_DATA, // The module introduction data
    childProtectionData: CHILD_PROTECTION_DATA,
    guidelineData: GUIDELINE_DATA
};

export default (state = initialState, action) => { // Sets the initial state
    return state;
};