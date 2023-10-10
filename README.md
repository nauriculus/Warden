<div align="center">
  <img src="https://binaramics.com/WardenLogo.png" alt="Logo" width="240">

  <p align="center">
    <br>
    Warden is a dedicated platform designed to address the critical need for enhanced security and transparency in the Solana ecosystem. It provides users with a straightforward and efficient way to report scams, fraudulent wallet activities, and other security concerns.
    <br />
    <br />
    <a href="https://binaramics.com:1212">Live Demo</a>
    ·
    <a href="https://twitter.com/Binaramics">Follow Us X</a>
     ·
    <a href="https://www.youtube.com/watch?v=9ckGCwmQBTw">Demo Video</a>
  </p>
</div>

## Problem Statement

In the world of blockchain, there's a significant lack of efficient systems for reporting scams and fraudulent activities. Existing blockchain explorers on Solana only display outdated data, allowing scammers to operate unchecked. This lack of security and transparency undermines trust within the Solana community.

# The Warden Solution: A Quick Overview: 

- **Effortless Scam Reporting**: Quickly integrate Warden to enable users to report scams and fraudulent activities without the hassle of complex procedures or gas fees.
- **Timely Action**: Take immediate action against scams and phishing attacks, protecting your users from potential threats.
- **Open Reporting Data**: Access reported wallet data via the API to enhance your platform's security measures and protect your users effectively.

# Full Overview
- **Effortless Reporting:** Warden simplifies the process of reporting scams. Users can report suspicious wallets in seconds, without worrying about gas fees or complex procedures.

 <img src="https://github.com/nauriculus/Warden/assets/24634581/bf5ba8bc-4563-48ff-b5f4-21a262e7e6d3" alt="MainPage" width="700">


 <img src="https://github.com/nauriculus/Warden/assets/24634581/fca3f81d-77eb-4cbf-834e-a720cccd5d83" alt="Effortless Reporting" width="700">

- **Categorized Reports:** Warden categorizes reports into three distinct types, allowing users to specify the nature of their concerns.

![Categorized Reports](https://github.com/nauriculus/Warden/assets/24634581/8cebe9f3-b746-4606-8522-83c2e2236689)

- **Detailed Descriptions:** Users have the option to provide detailed descriptions, enhancing the quality of information available to the community.

- **Community Collaboration:** Warden is not just about reporting; it's a collaborative ecosystem. Users actively participate in the voting system.

<img src="https://github.com/nauriculus/Warden/assets/24634581/48b68b6d-8a24-405a-8178-9ce1f5271979" alt="Reporting" width="600">
<img src="https://github.com/nauriculus/Warden/assets/24634581/fefa2ef8-1b88-47e0-9a1e-ada07b64275c)" alt="Reporting2" width="600">
<img src="https://github.com/nauriculus/Warden/assets/24634581/5afb357c-5127-4607-93f4-f06dd27cbb5f)" alt="Reporting3" width="600">

- **User-friendly API:** Warden offers a user-friendly API, granting developers and other platforms seamless access to integrate and protect their users.

### API Documentation
| Endpoint     | Response                                                                                                                                                                                                                               |
|--------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| /getDetails (GET)         | [{"REPORT_ID":"ed03cd94-9e66-4861-85e3-16b7bf05c078","REPORTER":"nau56xrowdmHF7kvnJQBTm6co2BxXAjr6ESgSZbEutc","FLAGGED_WALLET":"EAUwikTgqeHKJMaqDj17Cwb6TH3XzcXbxHSN7etGzMFt","TYPE":"exploit","DESCRIPTION":"bypassed the verification process of the Wormhole bridge on Solana $320M stolen. ","TIMESTAMP":1696766386,"STATUS":0,"VOTES":3,"VISITS":43,"VOTE_WALLETS":"[\"nau56xrowdmHF7kvnJQBTm6co2BxXAjr6ESgSZbEutc\",\"E1rid3KRQbSJZPYgbU9DfTp87RPYDcuq8y8PszqtbnSC\"]"}]                                                                                                                         |
| /trending (GET)         | [{"REPORT_ID":"ed03cd94-9e66-4861-85e3-16b7bf05c078","REPORTER":"nau56xrowdmHF7kvnJQBTm6co2BxXAjr6ESgSZbEutc","FLAGGED_WALLET":"EAUwikTgqeHKJMaqDj17Cwb6TH3XzcXbxHSN7etGzMFt","TYPE":"exploit","DESCRIPTION":"bypassed the verification process of the Wormhole bridge on Solana $320M stolen. ","TIMESTAMP":1696766386,"STATUS":0,"VOTES":3,"VISITS":50,"VOTE_WALLETS":"[\"nau56xrowdmHF7kvnJQBTm6co2BxXAjr6ESgSZbEutc\",\"E1rid3KRQbSJZPYgbU9DfTp87RPYDcuq8y8PszqtbnSC\"]"},{"REPORT_ID":"4c6a6ce8-14fc-40e3-8de3-3d7dd2a7674d","REPORTER":"nau56xrowdmHF7kvnJQBTm6co2BxXAjr6ESgSZbEutc","FLAGGED_WALLET":"AgJddDJLt17nHyXDCpyGELxwsZZQPqfUsuwzoiqVGJwD","TYPE":"exploit","DESCRIPTION":"Raydium LP Exploit","TIMESTAMP":1696766729,"STATUS":1,"VOTES":2,"VISITS":20,"VOTE_WALLETS":"[\"E1rid3KRQbSJZPYgbU9DfTp87RPYDcuq8y8PszqtbnSC\"]"},{"REPORT_ID":"f126c0bd-f5d9-4167-addf-383b34f5f0c2","REPORTER":"nau56xrowdmHF7kvnJQBTm6co2BxXAjr6ESgSZbEutc","FLAGGED_WALLET":"61wJT43nWMUpDR92wC7pmo6xoJRh2s4kCYRBq4d5XQHZ","TYPE":"exploit","DESCRIPTION":"Solend LP Exploit","TIMESTAMP":1696766753,"STATUS":2,"VOTES":2,"VISITS":20,"VOTE_WALLETS":"[\"E1rid3KRQbSJZPYgbU9DfTp87RPYDcuq8y8PszqtbnSC\",\"nau56xrowdmHF7kvnJQBTm6co2BxXAjr6ESgSZbEutc\"]"},{"REPORT_ID":"ad6547ea-db88-408e-8bbc-e2752e3213a5","REPORTER":"E1rid3KRQbSJZPYgbU9DfTp87RPYDcuq8y8PszqtbnSC","FLAGGED_WALLET":"Esmx2QjmDZMjJ15yBJ2nhqisjEt7Gqro4jSkofdoVsvY","TYPE":"exploit","DESCRIPTION":"Hacker (Crema Finance Exploit)","TIMESTAMP":1696804170,"STATUS":0,"VOTES":2,"VISITS":5,"VOTE_WALLETS":"[\"E1rid3KRQbSJZPYgbU9DfTp87RPYDcuq8y8PszqtbnSC\",\"nau56xrowdmHF7kvnJQBTm6co2BxXAjr6ESgSZbEutc\"]"},{"REPORT_ID":"1dfda16e-4d19-46d4-a252-5fd9fd1b8bff","REPORTER":"nau56xrowdmHF7kvnJQBTm6co2BxXAjr6ESgSZbEutc","FLAGGED_WALLET":"yUJw9a2PyoqKkH47i4yEGf4WXomSHMiK7Lp29Xs2NqM","TYPE":"contract","DESCRIPTION":"Mango Markets Exploiter","TIMESTAMP":1696766674,"STATUS":1,"VOTES":1,"VISITS":18,"VOTE_WALLETS":"[\"nau56xrowdmHF7kvnJQBTm6co2BxXAjr6ESgSZbEutc\"]"},{"REPORT_ID":"3df73cdd-bbd3-41f2-bfd1-28548129a0a3","REPORTER":"nau56xrowdmHF7kvnJQBTm6co2BxXAjr6ESgSZbEutc","FLAGGED_WALLET":"9WArrPQyZ4HovjoUjYbvtJtbrfJNzQWCBk5k75w6NpEb","TYPE":"exploit","DESCRIPTION":"HadeSwap Exploit","TIMESTAMP":1696766771,"STATUS":0,"VOTES":1,"VISITS":17,"VOTE_WALLETS":"[\"nau56xrowdmHF7kvnJQBTm6co2BxXAjr6ESgSZbEutc\"]"},{"REPORT_ID":"c3fde6d6-b048-420d-aed4-460faa2e6ab5","REPORTER":"E1rid3KRQbSJZPYgbU9DfTp87RPYDcuq8y8PszqtbnSC","FLAGGED_WALLET":"76w4SBe2of2wWUsx2FjkkwD29rRznfvEkBa1upSbTAWH","TYPE":"exploit","DESCRIPTION":"Hacker (Nirvana Finance Exploit)","TIMESTAMP":1696803475,"STATUS":0,"VOTES":1,"VISITS":12,"VOTE_WALLETS":"[\"E1rid3KRQbSJZPYgbU9DfTp87RPYDcuq8y8PszqtbnSC\"]"},{"REPORT_ID":"2c81f8c9-0b66-49fe-9689-5470d5ae6c00","REPORTER":"nau56xrowdmHF7kvnJQBTm6co2BxXAjr6ESgSZbEutc","FLAGGED_WALLET":"35wiSXzUDkN6vbxoNT7ARVVQduVRbSP4kVQnXbAcvhnM","TYPE":"fraud","DESCRIPTION":"TurtleNFT Fraud","TIMESTAMP":1696876199,"STATUS":1,"VOTES":1,"VISITS":4,"VOTE_WALLETS":"[\"nau56xrowdmHF7kvnJQBTm6co2BxXAjr6ESgSZbEutc\"]"}]                                                                                                                                                                                    |
