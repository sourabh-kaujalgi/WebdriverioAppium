import path from "path"
import config from "./wdio.conf.js"

config.specs= [
    './test/spec/**/addnote.spec.js'
],

config.capabilities=[
    {
            'appium:platformName':'Android',
              'appium:platformVersion':'12.0',
              'appium:deviceName':'Test',
              'appium:automationName':'UIAutomator2',
              "appium:app": path.join(process.cwd(), "./app\\android\\ColorNote+Notepad.apk"),
              "appium:autoGrantPermissions":true


    }
],
config.port=4723;