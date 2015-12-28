from app import db


class Bookmark(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(128), index=True, unique=True)
    url = db.Column(db.String(128), index=True, unique=True)

    def __repr__(self):
        return '<Bookmark %r>' % (self.name)
