#部署指南
##本机部署（linux osx）

1. 安装python的包管理工具pip
	<https://pip.pypa.io/en/latest/installing.html>
	
2. 安装virtualenv
下面的命令可以安装 virtualenv:
```bash
pip install virtualenv
```

3. clone本项目至本地

4. 进入项目目录，运行如下指令，这条命令会创建一个用于本项目运行的虚拟python环境
```bash
virtualenv flask
```

5. 输入以下指令进行依赖模块的安装
```bash
flask/bin/pip install flask
flask/bin/pip install flask-sqlalchemy
```

6. 生成数据库
你需要运行这个脚本
```bash
chmod +x db_create.py
./db_create.py
```

7. 运行run.py
```bash
chmod +x run.py
./run.py
```

##服务器端部署（todo）
