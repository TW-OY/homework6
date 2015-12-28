from flask import render_template, redirect, url_for, jsonify, request
from app import app, db, models


PAGE_SIZE = 5
@app.route('/')
@app.route('/index')
@app.route('/index/<int:page>')
def index(page=1):
    temp_bookmark = models.Bookmark.query.paginate(page, PAGE_SIZE, False)
    return render_template("index.html", bookmarks=temp_bookmark, )


@app.route('/add', methods=["GET", "POST"])
def add():
    if request.method == 'POST':
        form = request.form
        name = form['name']
        url = form['url']
        u = models.Bookmark(name=name, url=url)
        db.session.add(u)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template("add.html")


@app.route('/search')
@app.route('/search/<int:page>')
def search(page=1):
    keyword = request.args['keyword']
    result = models.Bookmark.query.filter(models.Bookmark.name.like('%' + keyword + '%')).paginate(page, PAGE_SIZE, False)
    count = models.Bookmark.query.filter(models.Bookmark.name.like('%' + keyword + '%')).count()
    return render_template("search.html",bookmarks=result,keyword=keyword,number=count)

@app.route('/delete', methods=['GET','POST'])
def delete():
    form = request.form
    name = form['name']
    print name
    models.Bookmark.query.filter_by(name=name).delete()
    db.session.commit()
    return redirect(url_for('index'))
