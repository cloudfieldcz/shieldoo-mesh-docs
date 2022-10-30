---
layout: default
title: Servers
parent: Admin
nav_order: 2
permalink: /servers/
---

# Servers
Servers in a Shieldoo Mesh network are devices that users or other servers can connect to.
![](../../images/Servers01.png)

## Installing Servers
This section describes how to install a server in your Shieldoo Mesh network:
1. Go to the machine on which you want to install the server.
2. Log in to your organization's Shieldoo Mesh web application.
3. Create a placeholder for the server in your network:
   1. Go to the **Devices** \| **Servers** section.
   2. Click on the **Create** button to open the Create Server dialog.
   3. Configure the basic server settings:  
       - **Name** - Give the server a descriptive name.
       - **Note** - Describe the server's purpose.
   4. Click on the **Create** button again to open the installation instructions.
4. Follow the installation instructions to install the server-side Shieldoo Mesh application on the given machine.
5. Learn how to connect to the prepared server in the [Connecting to a Server](/server_connection/) section.

{: .warning }
> By default, each server allows any inbound and outbound traffic.
>
> To restrict access to a server, you can configure a firewall. Learn how to do that in the [Restricting Access to Servers](/servers/#restricting-access-to-servers) section.

<!---TODO - zakomponovat 'Access Rights' a 'Attached Services'-->
## Editing Servers
This section describes how to edit a server's configuration after it has been created:
1. Open the context menu of the server whose configuration you want to edit:  
![](../../images/Servers02.png)
2. Use the provided options to edit the server:  
   - **Detail** - Opens the installation instructions that you used to install the server.
   - **Edit** - Opens the server's configuration which you can edit.
   - **Delete** - Deletes the server from your Shieldoo Mesh network.  
   No users or other servers will be able to connect to it.

## Restricting Access to Servers
This section describes how to restrict access to a server using a firewall:
<!---## Listeners-->
