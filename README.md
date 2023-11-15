# 使用说明

## 项目主要内容

```bash
# 项目启动

# installing
$ npm install --force

# start
$ npm run start
```

```code
# 目录结构

|————nest-next
|—————————src
|————————————client  - 前端代码
|————————————server  - node层代码
|—————————.eslintrc.js
|—————————.ignore
|—————————.prettier.js
|—————————global.d.ts
|—————————nest-cli.json
|—————————package-lock.json
|—————————package.json
|—————————README.md
|—————————tsconfig.build.json
|—————————tsconfig.json
|—————————yarn.lock

```

### 客户端 client

一、路由系统：nextjs的路由为文件结构路由。
1. 在pages文件夹下新建文件，即对应着路由系统中的路径，eg: pages/demo.tsx，即对应着页面上/demo的路由
2. 在pages文件夹下新建文件夹，也可以对应到路由系统中的路径，eg: pages/home/index.tsx，即对应页面上的/home的路由

二、状态管理：采用redux进行状态管理
1. 第三方工具redux-toolkit，具体使用方法可以参考: src/client/store文件夹的内容
2. 读取方式: useSelector 
   ``` code
   eg: const basicInfo = useSelector((state: any) => state.basic.basicInfo)
   ```
3. 修改数据: useDispatch
   ``` code
   eg: const dispatch = useDispatch()
   dispatch(setBasicInfo({
    fdSubject: "demo"
   }))
   ```

三、http请求
1. 可以参考pages/login文件夹下的内容 
```
const res = await dispatchRedux(asyncThunk.login(params));
```
其中asyncThunk.login()为封装好的login的请求方法，具体配置在store/asyncThunk文件夹的config.ts文件中

2. 注意server文件夹中的内容，前端可以写符合自己需要的请求接口

四、封装组件   
  components文件夹下封装了常用的form表单开发组件，table表格开发组件，search搜索页功能组件，chart图表功能组件等

1. 常用的form表单开发组件，在实际开发的时候，只需要配置formObj，然后传到组件中，就可以快速准确的生成一个form表单
```
const formObj = {
  name: "form",
  key: "form",
  inRow: 3,
  items: [
    {
      kind: "input",
      name: "input",
      ...
    },
    ...
  ]
}

<FormLayout formObj={formObj} />
```
其中items表示具体的表单项，items中每一个类目都包含一个kind字段，主要有input，select，checkout，datepicker，uploadFile，uploadImages等值供使用，与items同级的inRow字段可以赋值任何的数值，或者不赋值，当不赋值的时候，默认每行显示一列，赋值具体的数值的时候，显示对应的列数

2. 常用的table表格开发组件，在实际开发的时候，只需要配置tableObj，然后传到组件中，就可以快速准确的生成一个table表格
```
const tableObj = {
  column: [],
  dataSource: data,
  pagination: {
    page: 1,
    pageSize: 10,
    total: 100
  },
  ...
}
```
其中column表示具体的表格每一列的表头显示的内容，以及每一列的展示形式，dataSource表示具体的数据源，pagination为表格分页部分

3. 常用的search搜索功能开发组件，在实际开发的时候，只需要配置formObj和tableObj，然后传到组件中，就可以快速准确的生成一个search搜索页   
结合上面的form组件和table组件，可以很快的组建出一个功能完整的搜索页面

4. 常用的图表开发组件，在实际开发的时候，只需要配置config，然后传到组件中，就可以快速准确的生成一个图表


### 服务端 server

一、nestjs框架   
nestjs框架是一款很适合前端用于服务端开发的框架，框架本身架构类似于java的spring框架，包含了modules，controller，service三个重要组成部分，在该项目中服务端路由分为页面路由和api路由

1. view模块   
主要负责页面路由的拦截和渲染：由于整个项目是采用的SSR的方式进行渲染，因此页面发起的路由会先被捕获到这里，eg: /home，home页的路由会先在view.controller.ts文件中捕获到，然后映射到client/pages/home中

2. models模块   
在models文件夹下，除了views文件夹是负责页面路由以外，其他的都是api路由，进行具体的服务逻辑操作，对接后台真实的服务端接口

3. swagger模块  
在nestjs中可以接入swagger第三方库，来自动管理api文档

4. ORM模块   
在nestjs中可以接入ORM体系的数据库处理系统，让前端可以自己快捷方便地操作数据库系统


