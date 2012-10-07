#!/usr/bin/env python
#  -*- coding: utf-8 -*-
#
# Config file for the web-build system:
#	REMOTE_HOST_URI  - The complete location of remote files; including host. In ssh / rsync format.
#	REMOTE_WEB_URI   - The uri (url) to be loaded in the browser after build
#	LOCAL_DIR	 - The local directory to be synced with the remote location
#	DELAY (time)	 - Delay in seconds for how long to wait until opening the browser
#

import sys


class config:
    REMOTE_HOST_URI = "pompel.komsys.org:/var/www/www.technocake.net/tgallery"
    REMOTE_WEB_URI = "http://technocake.net/tgallery/"
    LOCAL_DIR = r'~/web/tgallery/'
    DELAY = 0

