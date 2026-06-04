import type { NextRouter } from "next/router";
import { CONTACT_FORM_ID, CONTACT_FORM_PATH } from "../constants/contact";

export function scrollToContactForm(behavior: ScrollBehavior = "smooth") {
  document.getElementById(CONTACT_FORM_ID)?.scrollIntoView({
    behavior,
    block: "start",
  });
}

export function navigateToContactForm(router: NextRouter) {
  const formOnPage = document.getElementById(CONTACT_FORM_ID);
  if (formOnPage) {
    scrollToContactForm();
    const pathWithoutHash = router.asPath.split("#")[0] || router.pathname;
    const hash = `#${CONTACT_FORM_ID}`;
    if (window.location.hash !== hash) {
      window.history.replaceState(null, "", `${pathWithoutHash}${hash}`);
    }
    return;
  }

  void router.push(CONTACT_FORM_PATH);
}
