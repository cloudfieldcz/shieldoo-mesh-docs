---
layout: default
title: Servers
parent: Admin
nav_order: 3
permalink: /servers/
---

# Servers
Servers in a Shieldoo Secure Network are devices to which users or other servers can connect.

{% include img.html src="../../images/Servers01.png" alt="Servers" %}

## Create & Install Servers
{: .d-inline-block }
[__ADMIN__](/admin_getting_started/#administration-modes){: style="color: white; text-decoration: none;"}
{: .label .label-purple }
{: .d-inline-block }
[__ADMIN \| EXPERT__](/admin_getting_started/#administration-modes){: style="color: white; text-decoration: none;"}
{: .label .label-green }

The following steps describe how to install a server in your Shieldoo Secure Network: 
1. Go to the machine you want to install the server.
2. Log in to your organization's Shieldoo Secure Network web application.
3. Go to the __Network__ \| __Servers__ section.
4. Click on the __Create__ button to open the Create Server dialog.
5. Configure the basic server settings:
   - __Name__ - Give the server a descriptive name.
   - __Note__ - Describe the server's purpose.
   - __Automatic Shieldoo update__ - Enables automatic Shieldoo server-side application updates to the latest version.
6. Click the __Create__ button again to open the installation instructions.
7. Follow the installation instructions to install the server-side Shieldoo Secure Network application on the machine.
8. Learn how to connect to the prepared server in the [Connect Me](/connect_me/) chapter.

{: .warning }
> - The configuration data (provided by the installation instructions) contains the __secret key__ to your server. Do not share it with anyone to prevent unauthorized users from exploiting it.
> - By default, each server __allows any inbound and outbound traffic.__ You can configure a firewall to restrict access to the services running on the given server. Learn how to do that in the [Access Management](/access_management/) chapter.

{: .note }
>If you create and install the server in Admin \| Expert mode, you can also configure and use following features:
>- __Access Rights__ - For more information, see [below](/servers/#access-rights).
>- __Attached Services__ - For more information, see [below](/servers/#attached-services).
>- __Automatic OS updates__ - For more information, see [below](/servers/#automatic-os-updates).

## Editing Servers
{: .d-inline-block }
[__ADMIN__](/admin_getting_started/#administration-modes){: style="color: white; text-decoration: none;"}
{: .label .label-purple }
{: .d-inline-block }
[__ADMIN \| EXPERT__](/admin_getting_started/#administration-modes){: style="color: white; text-decoration: none;"}
{: .label .label-green }

This section describes how to edit a server's configuration after it has been created.

1. Go to the __Network__ \| __Servers__ section.
2. Open the context menu of the server whose configuration you want to edit:

   {% include img.html src="../../images/Servers02.gif" alt="Editing Servers" %}

3. Use the provided options to edit the server:  
   - __Detail__ - Open the current informations about the server and the installation instructions you used to install the server.
   - __Edit__ - Open the server's configuration, which you can edit.
   - __Delete__ - Deletes the server from your Shieldoo Secure Network. No users or other servers will be able to connect to it.

## Status Servers
{: .d-inline-block }
[__ADMIN__](/admin_getting_started/#administration-modes){: style="color: white; text-decoration: none;"}
{: .label .label-purple }
{: .d-inline-block }
[__ADMIN \| EXPERT__](/admin_getting_started/#administration-modes){: style="color: white; text-decoration: none;"}
{: .label .label-green }

<!-->
ADD TYPE OF CONNECTIONS: PEER-TO-PEER, RELAY, WEBSOCKET
- Diagram image
- Explanation
- Troubleshooting
<-->

The icons in the list of servers in the __Network__ \| __Servers__ section provide visual information about the current server status:
- ![](../../images/Servers03.png)
The server was never connected to the network, and other enabled nodes (users and servers) can not connect to this server. The server may not have been installed yet.
- ![](../../images/Servers04.png)
The server is connected to the network in Peer-to-Peer mode or Relay mode, and other enabled nodes (users and servers) can connect to this server.
- ![](../../images/Servers05.png)
The server is connected to the network in Websocket mode, and other enabled nodes (users and servers) can connect to this server.
- ![](../../images/Servers06.png)
The server is not connected to the network, and other enabled nodes (users and servers) can not connect to this server because of a network connection problem.
- ![](../../images/Servers07.png)
The server is not connected to the network, and other enabled nodes (users and servers) can not connect to this server. The server will need to be turned on, woken up or restarted.

The current status for a specific server is also displayed in greater detail in the Server Detail section.

{% include img.html src="../../images/Servers13.png" alt="Status Servers" %}

1. Go to the __Network__ \| __Servers__ section.
2. Open the context menu of the server whose configuration you want to edit:

   {% include img.html src="../../images/Servers02.gif" alt="Editing Servers" %}

3. Click on __Detail__ to open the current informations about the specific server.

## Access Rights
{: .d-inline-block }
[__ADMIN \| EXPERT__](/admin_getting_started/#administration-modes){: style="color: white; text-decoration: none;"}
{: .label .label-green }
This section describes how to configure and manage Access Rights of the servers. For more information, see the [Access Management](/access_management/) chapter.

 {% include img.html src="../../images/Servers08.png" alt="Access Rights of the server" %}

### Configuring Access Rights
The following steps describe how to configure Access Rights of the servers:
1. Enable __Expert Mode__.
   - See the [Access Management](/access_management/) chapter to learn how to enable Expert Mode.
2. Go to the __Network__ \| __Servers__ section.
3. Open the context menu of the server whose configuration you want to edit.
4. Click on __Edit__ to open the server's settings.
5. Go to the __Access Rights__ tab.
6. Configure the access right settings:
   - __IP Address__ - Skip this setting unless the IP address of the given server has changed since you created it.
   - __Firewall configuration__ - Select one of the prepared firewalls.
   - __Groups__ - Map the server with all the desired groups.
   - __Valid Till__ - Define how long the access right will remain valid:
     - _Subscription lifetime_ - Defines that the access right will remain valid if your organisation subscribes to Shieldoo Secure Network.
     - _Custom expiration date_ - Defines a custom expiration using the provided date picker.
8. Click the __Save__ button to confirm the access right creation.

## Attached Services
{: .d-inline-block }
[__ADMIN \| EXPERT__](/admin_getting_started/#administration-modes){: style="color: white; text-decoration: none;"}
{: .label .label-green }
This section describes how to use Attached Services of the servers.

Attached Services are located on devices that run on the local network of a server, but where Shieldoo cannot be installed (e.g. a printer). Shieldoo lets you directly connect to such services (a device port is mapped to a server port).

{% include img.html src="../../images/Servers09.png" alt="Attached Services" %}

### Configuring Attached Services
The following steps describe how to configure a connection to an attached service:
1. Enable __Expert Mode__.
   - See the [Access Management](/access_management/) chapter to learn how to enable Expert Mode.
2. Go to the __Network__ \| __Servers__ section.
3. Open the context menu of the server whose configuration you want to edit.
4. Click on __Edit__ to open the server's settings.
5. Go to the __Attached Services__ tab.
6. Click on the __Create__ button to open the _Create Attached Service_ dialog.
7. Configure the attached service settings:
   - __Type__ - Select what type of attached service you are configuring: _Server_, _Printer_, _NAS_, or _Other_.  
   The __Attached Services__ tab will display the corresponding icon to indicate the type of each configured service.  
   ![](../../images/Servers10.png)
   - __Listen port__ - Define the port you want the service to run within the Shieldoo network.
   - __Protocol__ - Select the network protocol: _TCP_ or _UDP_. <!---Co přesně je to za protokol?-->
   - __Forward port__ - Define the port on which the service you want to connect runs on the server's local network.   
   Shieldoo will map this port to the port defined by the __Listen port__ setting.
   - __Forward host__ - Define the IP address or hostname of the service you want to connect to.
   - __Description__ - Describe the attached service's purpose.
8. Click on the __Save__ button to create the connection to the configured attached service.
9. Learn how to connect to the prepared attached service in the [Connect Me](/connect_me/) chapter.

For a specific example of connecting to an attached service, see the [Sharing a Printer](/examples/#sharing-a-printer) section.

{: .note }
> Who can use attached services is governed by the same firewall rules as those that can be configured for servers.  
> 
> For more information, see the [Access Management](/access_management/) chapter.

## Automatic OS updates
{: .d-inline-block }
[__ADMIN \| EXPERT__](/admin_getting_started/#administration-modes){: style="color: white; text-decoration: none;"}
{: .label .label-green }

This section describes how to use Automatic OS updates of the servers.

Shieldoo Secure Network supports automatic OS updates, bringing simplified management to your IT infrastructure. With the introduction of this functionality, administrators can now manage servers more efficiently.

With Shieldoo Secure Network, administrators can monitor the status of updates for all supported OS installed on servers, i.e. Windows, Linux, MacOS. 

{% include img.html src="../../images/Servers11.png" alt="Automatic OS updates" %}

Additionally, for Linux OS, administrators can apply OS and security updates, simplifying their daily operations and increasing overall efficiency.

{% include img.html src="../../images/Servers12.png" alt="Automatic OS updates for Linux" %}

### Configuring Automatic OS updates
1. Enable __Expert Mode__.
   - See the [Access Management](/access_management/) chapter to learn how to enable Expert Mode.
2. Go to the __Network__ \| __Servers__ section.
3. Open the context menu of the server whose configuration you want to edit.
4. Click on __Edit__ to open the server's settings.
5. Go to the __General__ tab.
6. Configure the Automatic OS updates settings:
   - __Automatic OS update__ (Windows, Linux, MacOs) - Enables automatic updates on the OS level. This option will start collecting data about updates. Which, means that you must apply update yourself.
   - __Apply security OS updates__ (only Linux) - Enables automatic security updates on OS level (will be applied).
   - __Apply all OS updates__ (only Linux) - Enables all automatic updates on OS level (will be applied).
   - __Restart the machine when OS updates were applied__ (only Linux).
   - __Select an hour in the day to apply updates__ (only Linux).

### Status Automatic OS updates

The icons in the list of servers in the __Network__ \| __Servers__ section provide visual information about the current status of the automatic OS udpates:
- ![](../../images/Servers14.png) - The server operating system is up to date  
- ![](../../images/Servers15.png) - The server operating system needs updates. Security updates: 37
- ![](../../images/Servers16.png) - The server operating system needs updates. Other updates: 8
- ![](../../images/Servers17.png) - Update process failed with error.

The current status of automatic OS updates for a specific server is also displayed in greater detail in the Server Detail section.

{% include img.html src="../../images/Servers13.png" alt="Status automatic OS updates" %}

1. Go to the __Network__ \| __Servers__ section.
2. Open the context menu of the server whose configuration you want to edit:

   {% include img.html src="../../images/Servers02.gif" alt="Editing Servers" %}

3. Click on __Detail__ to open the current informations about the specific server.