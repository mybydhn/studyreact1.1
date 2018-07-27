## 运行结果
-调试playground.js,jsx编译后的结果是 createElement("div",null,user.name)
-dom.js中的each方法是不是有点错误 keys 是否应该改成Object.keys

##笔记
-renderComponent(component,container)
-- 1.将component实例渲染到给定的container中，
-- 2.在渲染过程中 会先判断当前的 container中是否存在一个与之对应、已经渲染过的component,若存在则更新preComponent; 若没有
   则将 container与组件建立关联映射，同时调用mountComponentIntoNode 将component挂载到container上

--组件创建流程
--1.消费者配置回调声明
--2.编译阶段 【native组件；composite组件】
--3.组件的创建 【createClass】[需要再详细的看下这个方法]
--4.组件实例化

--组件渲染流程
--1.ReactComponent.mountComponentIntoNode
--2.ReactComponent._mountComponentIntoNode
--3.ReactCompositeComponent.mountComponent
组件渲染过程的代码需要再看下没有特别理解到。

