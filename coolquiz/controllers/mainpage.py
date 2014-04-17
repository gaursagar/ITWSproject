# coding: utf8
# try something like
@auth.requires_login()
def index():
    #response.flash = request.vars['score']
    if request.vars:
        gamename = request.vars['game']
        if gamename == 'gridgame':
            db.gridgame.insert(score = request.vars['score'])
        if gamename == 'picturequiz':
            db.picturequiz.insert(score = request.vars['score'])
        if gamename == 'reflect':
            db.reflect.insert(score = request.vars['score'])
        response.flash = "Progress has been saved"
    return dict(message="hello from mainpage.py")

def scores():
        pquiz = db(db.picturequiz).select()
        ggame = db(db.gridgame).select()
        rlect = db(db.reflect).select()
        return dict(t1 = pquiz, t2 = ggame, t3 = rlect)
