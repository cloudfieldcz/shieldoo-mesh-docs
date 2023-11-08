---
layout: default
title: Connect Me
parent: User
nav_order: 2
permalink: /connect_me/
---

# Connect Me
This chapter describes the initial steps to start using your Shieldoo Secure Network:
1. [Login to Shieldoo Web Application](/connect_me/#login-to-shieldoo-web-application)
2. [Download & Install Shieldoo Client](/connect_me/#download--install-shieldoo-client)
3. [Connect to Shieldoo Secure Network](/connect_me/#connect-to-shieldoo-secure-network)

## Login to Shieldoo Web Application
{: .d-inline-block }
[__USER__](/user_getting_started/#getting-started){: style="color: white; text-decoration: none;"}
{: .label .label-blue }

When your Shieldoo Secure Network was successfully created, and you were notified via email, this is the initial page requesting to log in using your existing Microsoft or Google account.

{% include img.html src="../../images/ConnectMe01.png" alt="Login in Shieldoo web application" %}

{: .note }
> After successful login to the Shieldoo web application, the user information is shown in the upper right corner (user name, type of user and icon).
> 
> ![](../../images/ConnectMe02.png)
> 
> By clicking on the arrow icon, it is possible to check __My Account__ details or to __Sign Out__ from the site.

## Download & Install Shieldoo Client
{: .d-inline-block }
[__USER__](/user_getting_started/#getting-started){: style="color: white; text-decoration: none;"}
{: .label .label-blue }

The following steps describe how to download and install the Shieldoo client:
1. Go to the __Connect Me__ \| __Download & Install__ section.

    {% include img.html src="../../images/ConnectMe03.gif" alt="Connect Me | Download & Install" %}

2. Choose the download link according to your operating system and click the arrow.

    {% include img.html src="../../images/ConnectMe04.png" alt="Choose operating system" %}

3. Download the client by clicking the __Download__ button.

    {% include img.html src="../../images/ConnectMe05.png" alt="Donwload the client" %}

4. Install the client according to the well-guiding instructions.

    {% include img.html src="../../images/ConnectMe06.png" alt="Install the client & sign in" %}

## Connect to Shieldoo Secure Network
{: .d-inline-block }
[__USER__](/user_getting_started/#getting-started){: style="color: white; text-decoration: none;"}
{: .label .label-blue }

This section describes establishing a secure connection to a server and attached services in Shieldoo Secure Network:
-  [Connect to Network](/connect_me/#connect-to-network)
-  [Connect to Servers](/connect_me/#connect-to-servers)
-  [Connect to Attached Services](/connect_me/#connect-to-attached-services)

{: .note }
>__Servers__ are devices to which users or other servers can connect.
>
>__Attached Services__ are located on devices that run on the local network of a server, but where Shieldoo cannot be installed (e.g. a printer). Shieldoo lets you directly connect to such services (a device port is mapped to a server port). Your admin of Shieldoo Secure Network manages these services.

### Connect to Network

After successfully downloading and installing the Shieldoo client, you can now connect to Shieldoo Secure Network.

The following steps describe how to connect via Shieldoo client:

1. Click on the __Shieldoo client icon__ in the system tray.

    {% include img.html src="../../images/ConnectMe07.png" alt="Connect Me | Download & Install" %}

2. Click on the __Sign-in__ option and log in with the same credentials you used to [log in to the Shieldoo web application](/connect_me/#login-to-shieldoo-web-application).

    {% include img.html src="../../images/ConnectMe08.png" alt="Connect Me | Download & Install" %}

3. Click on the __Connect__ option and connect to the network.

    {% include img.html src="../../images/ConnectMe09.png" alt="Connect Me | Download & Install" %}

After successfully connecting to the Shieldoo Secure Network, you can securely connect to any server and attached services in the network.


{: .note }
>The __Shieldoo client icon in the system tray__ provides visual aid about its current status:
>- Not Sign-in and Not Connect
> ![](../../images/ConnectMe10.png)
>- Sign-in and Not Connect
> ![](../../images/ConnectMe11.png)
>- Sign-in and Connect
> ![](../../images/ConnectMe12.png)

{: .note }
>The __Shieldoo client includes additional options__:
>- Update Shieldoo Client - _If a new client version is available, you can update it using this option_.
>- Disconnect - _Use this option to disconnect from the network without losing your login credentials_.
>- Specify Shieldoo network - _Use this option to change the network URL parameter_.
>- Enabled Full tunnel mode for communication - _The use option allows the feature of an anonymous VPN (you are masked on the Internet under the Lighthouse IP address)._
>- Favorite Shieldoo Networks - _Use this option to save a list of your networks and switch between them._
>- Enabled Autostart - _The use option allows the client to start automatically when the OS boots._ 
>- Enabled Auto-disconnect - _The use option allows you to save costs because, after 20 minutes of inactivity to connect to any server or access service, the client will automatically disconnect from the network._
>- My access rights on the Shieldoo network - _Use this option to redirect to a list of my access rights._
>- Version - _Displays the currently installed version of the client._
>- Exit - _Use this option to exit the client._

### Connect to Servers
To see the list of available servers, go to __Connect Me__ \| __My Access Rights__ in the Shieldoo web application.

{% include img.html src="../../images/ConnectMe13.gif" alt="Connect Me | My Access Rights" %}

It will show the list of available servers with information about their names, IP addresses and descriptions. In the description, your admin tells you what a particular server is for and how to connect to it.

{% include img.html src="../../images/ConnectMe14.png" alt="My Access Rights" %}

### Connect to Attached Services
The method of connecting to an attached service depends on the type of the given service. The general procedure is described below.

To see the list of available attached services, go to __Connect Me__ \| __My Access Rights__ in the Shieldoo web application. 

It will show the list of available servers. Then expand the row of a server with any attached services configured and connect to an attached service by utilizing the given attached service's IP address and the attached service's port. In the descriptions, your admi will tell you what a particular attached service is for and how to connect to it.

{% include img.html src="../../images/ConnectMe15.gif" alt="List of Attached services" %}

{: .tip }
> For specific instructions on how to set such a service, see the [Attached Services](/servers/#attached-services) section.

