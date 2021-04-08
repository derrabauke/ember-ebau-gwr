import Service from "@ember/service";

export default class GwrConfigService extends Service {
  municipalityId = 1342;
  municipalityName = "Galgenen";
  cantonAbbreviation = "SZ";
  constructionSurveyDeptNumber = 134200;
  gwrAPI = "http://localhost:8010/proxy/regbl/api/ech0216/2";

  get username() {
    //eslint-disable-next-line no-alert
    const username = localStorage.getItem("username") || prompt("Username:");
    if (username) {
      localStorage.setItem("username", username);
    }
    return username;
  }

  get password() {
    //eslint-disable-next-line no-alert
    const password = localStorage.getItem("password") || prompt("Password:");
    if (password) {
      localStorage.setItem("password", password);
    }
    return password;
  }

  get wsk_id() {
    //eslint-disable-next-line no-alert
    const wsk_id = localStorage.getItem("wsk_id") || prompt("wsk_id:");
    if (wsk_id) {
      localStorage.setItem("wsk_id", wsk_id);
    }
    return wsk_id;
  }
}
