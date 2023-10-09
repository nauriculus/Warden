<div align="center">
  <img src="https://binaramics.com/WardenLogo.png" alt="Logo" width="240">

  <p align="center">
    <br>
    Warden is a dedicated platform designed to address the critical need for enhanced security and transparency in the Solana ecosystem. It provides users with a straightforward and efficient way to report scams, fraudulent wallet activities, and other security concerns.
    <br />
    <br />
    <a href="https://binaramics.com:1212">Go to Website</a>
    ·
    <a href="https://twitter.com/Binaramics">Follow on X</a>
  </p>
</div>



![Screenshot (2027)](https://github.com/nauriculus/Warden/assets/24634581/bf5ba8bc-4563-48ff-b5f4-21a262e7e6d3)

## Problem Statement

In the world of blockchain, there's a significant lack of efficient systems for reporting scams and fraudulent activities. Existing blockchain explorers on Solana only display outdated data, allowing scammers to operate unchecked. This lack of security and transparency undermines trust within the Solana community.

## The Warden Solution

Warden is here to change that. It's a game-changing platform that empowers users and disrupts the status quo. Here's what Warden offers:

- **Effortless Reporting:** Warden simplifies the process of reporting scams. Users can report suspicious wallets in seconds, without worrying about gas fees or complex procedures.

![Effortless Reporting](https://github.com/nauriculus/Warden/assets/24634581/fca3f81d-77eb-4cbf-834e-a720cccd5d83)

- **Categorized Reports:** Warden categorizes reports into three distinct types, allowing users to specify the nature of their concerns.

![Categorized Reports](https://github.com/nauriculus/Warden/assets/24634581/8cebe9f3-b746-4606-8522-83c2e2236689)

- **Detailed Descriptions:** Users have the option to provide detailed descriptions, enhancing the quality of information available to the community.

- **Community Collaboration:** Warden is not just about reporting; it's a collaborative ecosystem. Users actively participate in the voting system.

![Community Collaboration](https://github.com/nauriculus/Warden/assets/24634581/48b68b6d-8a24-405a-8178-9ce1f5271979)
![Community Collaboration](https://github.com/nauriculus/Warden/assets/24634581/fefa2ef8-1b88-47e0-9a1e-ada07b64275c)
![Community Collaboration](https://github.com/nauriculus/Warden/assets/24634581/5afb357c-5127-4607-93f4-f06dd27cbb5f)

- **User-friendly API:** Warden offers a user-friendly API, granting developers and other platforms seamless access to integrate and protect their users.

### API Documentation
| Endpoint     | Queries                                                                                                                                                                                                                               |
|--------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| /getDetails (GET)         | Example response: [{"REPORT_ID":"ed03cd94-9e66-4861-85e3-16b7bf05c078","REPORTER":"nau56xrowdmHF7kvnJQBTm6co2BxXAjr6ESgSZbEutc","FLAGGED_WALLET":"EAUwikTgqeHKJMaqDj17Cwb6TH3XzcXbxHSN7etGzMFt","TYPE":"exploit","DESCRIPTION":"bypassed the verification process of the Wormhole bridge on Solana $320M stolen. ","TIMESTAMP":1696766386,"STATUS":0,"VOTES":3,"VISITS":43,"VOTE_WALLETS":"[\"nau56xrowdmHF7kvnJQBTm6co2BxXAjr6ESgSZbEutc\",\"E1rid3KRQbSJZPYgbU9DfTp87RPYDcuq8y8PszqtbnSC\"]"}]                                                                                                                         |
| /trending (GET)         | returns 200: will return trending wallets based on votes                                                                                                                                                                                    |
