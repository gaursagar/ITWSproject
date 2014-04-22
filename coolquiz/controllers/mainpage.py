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
    pquiz = db(db.picturequiz).select(orderby=~db.picturequiz.score)
    ggame = db(db.gridgame).select(orderby=~db.gridgame.score)
    rlect = db(db.reflect).select(orderby=~db.reflect.score)
    return dict(t1 = pquiz, t2 = ggame, t3 = rlect)

def scores():
        pquiz = db(db.picturequiz).select(orderby=~db.picturequiz.score)
        ggame = db(db.gridgame).select(orderby=~db.gridgame.score)
        rlect = db(db.reflect).select(orderby=~db.reflect.score)
        return dict(t1 = pquiz, t2 = ggame, t3 = rlect)
