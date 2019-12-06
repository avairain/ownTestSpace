@echo off
PowerShell -command ^ "adb reverse tcp:8097 tcp:8097;react-devtools;"