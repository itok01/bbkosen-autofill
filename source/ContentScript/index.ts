import { browser } from "webextension-polyfill-ts";

const INPUT_ORG_ID = 'keytext';
const SHOW_ORG_BUTTON_ID = 'dropdown_img';
const SUBMIT_BUTTON_ID = 'wayf_submit_button';

window.onload = () => {
    const inputOrg = <HTMLInputElement | null>document.getElementById(INPUT_ORG_ID);
    const showOrgButton = document.getElementById(SHOW_ORG_BUTTON_ID);
    const loginForm = document.getElementById(SUBMIT_BUTTON_ID);

    let org = '';
    let autoSubmit = false;

    const result = browser.storage.local.get(['org', 'autoSubmit']);
    result.then((value) => {
        if (value['org']) {
            org = value['org'];
        }
        if (value['autoSubmit']) {
            autoSubmit = value['autoSubmit'];
        }

        if (inputOrg && showOrgButton && loginForm) {
            inputOrg.value = org;
            showOrgButton.click();
            showOrgButton.click();
            if (autoSubmit) {
                loginForm.click();
            }
        }
    });
};

export { };
