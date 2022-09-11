# Cypress ui tests for [My Todo List](https://simpletodolist2022.herokuapp.com/)  ☑
---
## Technologies used:
|                      JavaScript                       |                      Cypress                       |                      GitHub Actions                      |                  Cypress Dashboard                  | Allure Report |
|:-----------------------------------------------------:|:--------------------------------------------------:|:--------------------------------------------------------:|:---------------------------------------------------:|:--------------:|
| <img src="img/JavaScript.png" width="40" height="40"> | <img src="img/Cypress.png" width="40" height="40"> | <img src="img/GitHubActions.png" width="40" height="40"> | <img src="img/CypressD.png" width="80" height="40"> |<img src="img/AllureReport.png" width="40" height="40">|
---

### <img src="img/CypressD.png" width="120" height="60" align=center> 

### Run all tests locally with UI:
```
yarn cy:open
```
---
###Run all tests locally without UI:

```
yarn cy:run
```
⚠️ *Tests will be run on Google Chrome*

---

### Cypress Dashboard:
[Look at the Cypress Dashboard](https://dashboard.cypress.io/projects/xdm5ap)

![alt "Cypress Dashboard Overview"](./img/CypressD_1.png "Cypress Dashboard Overview")

![alt "Cypress Dashboard Specs"](./img/CypressD_2.png "Cypress Dashboard Specs")

### <img src="img/reportlogo.svg" width="120" height="60" align=center>

### Run Allure report:
```
yarn allure:report
```

---

### Clear Allure report:
```
yarn allure:clear
```