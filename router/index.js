import Vue from 'vue'
import uniCrazyRouter from "uni-crazy-router";
Vue.use(uniCrazyRouter)

uniCrazyRouter.beforeEach(async (to, from ,next)=>{
    let flag = sessionStorage.getItem('Authorization')       //获取点击登录按钮时所设置的 sessionStorage
      if(to.path === '/home'||to.path === '/algsmanager'){        //如果想要跳转home或者algsmanager页面必须判断有没有sessionStorage
          if(flag){              //如果有sessionStorage
            next();				//跳转
          }else {
            alert('您还没有登录，请先登录账户');   //没有就先登录
            next('/login')							//还在登录页
          }
      }
      else{
        next();
      }
      if(to.path === '/login'){				//如果跳转到了登录页面必须清空sessionStorage，否则在地址栏输入路径还是会跳转
        sessionStorage.clear();				//清空sessionStorage
      }
    next()
})
