---
layout: default
title: Identity Integration
parent: Admin
nav_order: 6
permalink: /identity_integration/
---

# Identity Integration

Shieldoo Secure Network supports Microsoft Azure AD (Active Directory) integration, which brings enhanced security and simplified management to your IT infrastructure. By leveraging Azure AD, you can seamlessly manage users and groups within Shieldoo, ensuring a secure and organized environment for your servers and firewalls.

## Configuration Identity integration

### Azure AD Application 
Shieldoo Secure Network and Azure AD are integrated via an AD application known as a service principal. This application is responsible for reading groups and users from your Azure AD, making it easy to manage Shieldoo Secure Network groups and users without duplicating efforts.

__Configuration Azure AD Application__
1. Log in to the [Azure portal](https://portal.azure.com/). 
2. Go to the __Azure AD__ \| __App registrations__ section. 
3. Register a new __application__. 
4. Configure the following settings:
    - __Add a new client secret__ in the Certificates & Secrets section (we recommend saving the secret value).  
    - __Add Application permission__ and __Grant admin consent__ for your organization: 
        - Microsoft Graph: User.Read.All 
        - Microsoft Graph: Group.Read.All 
        - Microsoft Graph: GroupMember.Read.All

### Azure AD Group 
Next, you must create a group within Azure AD containing users with admin rights in Shieldoo Secure Network (Shieldoo admins). These admins can manage Shieldoo Secure Network settings and configurations. Centralizing the management admin in one Azure AD group allows you to easily add or remove users as needed, streamlining your security administration process.

__Configuration Azure AD Group__
1. Log in to the [Azure portal](https://portal.azure.com/). 
2. Go to the __Azure AD__ \| __Groups__ section. 
3. Create a new group. 
4. To the group, add admins in Shieldoo Secure Network.

{: .warning}
>Don't forget to group Shieldoo admin, including yourself (who configured the Identity integration), as you could lose access to the Shieldoo Secure Network web application.

### Shieldoo Secure Network 
In the last step, you must set up Identity integration in Shieldoo Secure Network.

 ![](../../images/IdentityIntegration01.gif)

__Configuration Identity integration__
1. Log in to your organization's Shieldoo Secure Network web application.
2. Enable __Expert Mode__
    - See the [Access Management](/access_management/) chapter to learn how to enable Expert Mode.
3. Go to the __Settings & Logs__ \| __System Settings__ section.
4. In the Identity integration section, click the __configure__ button to open the settings dialog.
5. Configuration of the Identity integration settings:
    - Tenant Id
    - Client Id
    - Client secret
    - Shieldoo admin group ObjectId
6. Click on the Save button to confirm setting Identity integration.

## Use Identity integration

When creating server and firewall configurations in Shieldoo Secure Network, Azure AD __groups__ are utilized for defining rules and importing members. This ensures that your organization's access controls are consistently applied across all servers and firewalls, improving overall security. In addition, groups are replicated from Azure AD into Shieldoo Secure Network when Identity integration is successfully configured, and you can start using them immediately.

__Users__ are replicated from Azure AD into Shieldoo Secure Network in two ways: 
- Admin - When Identity integration is successfully configured, admins (users of group Shieldoo Admin) are replicated from the Azure AD group into Shieldoo Secure Network, and you can start using them immediately.  
- Users - Other users are replicated ad-hoc from Azure AD groups based on using a specific group in the inbound firewall rules.

See the [Access Management](/access_management/) chapter to learn how to set up access rights and firewall configuration.

{: .warning}
>By default, a user can be accessed by another user or by a server.
>We highly recommend that you secure the users in your network with a specific firewall. Learn how to do that in the [Securing Users](/users/#securing-users) section.

By default, a user replicated with specific settings from the __default Access Card Template__ in Shieldoo Secure Network. This ensures that your security policies are consistently applied across your entire organization. 

If you want to use a different setting, we recommend that you change the setting in the default Access Card Template as follows:

1. Log in to your organization's Shieldoo Secure Network web application.
2. Enable __Expert Mode__
    - See the [Access Management](/access_management/) chapter to learn how to enable Expert Mode.
3. Go to the __Network__ \| __Access Card Templates__ section. 
4. Open the context menu of the default Access Card Template and select the Edit button to change specific settings:
    - Firewall configuration
    - Groups
    - Valid till

{: .note }
>__Replicating groups and users__ from Azure AD into Shieldoo Secure Network can be done in two ways:
>1. Automatic replication takes place every 20 minutes.
>2. Manual replication takes 1 minute.
>    - Go to the __Settings & Logs__ \| __System Settings__ section.
>    - In the Identity integration section, click the __configure__ button to open the settings dialog.
>    - Click on the __Save__ button to confirm setting Identity integration.

## Change some features with Identity integration 

After successfully configuring the Identity integration, some features will change in the Shieldoo web application: 
- The __create group feature is enabled__ because it is required to create server-to-server access within the Shieldoo Secure Network. For more information about this feature, see in  [Access Management](/access_management/) chapter. 
- The __invite user feature is disabled__ because users are replicated from the Azure AD. For more information about this feature, see in [Users](/users/) chapter. 
- The __edit and grant/revoke admin rights are disabled__ for the user because these functions are controlled in Azure AD. For more information about this feature, see in [Users](/users/) chapter. 
- The __create multiple Access Cards feature is disabled__ for a user because Identity integration controls access based on groups. For more information about this feature, see in Access Management chapter in [Creating User Access Cards](/access_management/#creating-user-access-cards) section.
