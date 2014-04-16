# coding: utf8
# try something like
@auth.requires_login()
def index(): return dict(message="hello from mainpage.py")
