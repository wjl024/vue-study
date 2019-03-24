import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode:"history",
  routes: [
    {
      path: '/',
      name: 'Index',
      component:resolve => require(['../components/Index.vue'],resolve)
    },
		{
			 path: '/task',
			name: 'Task',
			component:resolve => require(['../components/Task.vue'],resolve)
		},
		{
			 path: '/lib',
			name: 'Lib',
			component:resolve => require(['../components/Lib.vue'],resolve)
		},
		{
			 path: '/ucenter',
			name: 'Ucenter',
			component:resolve => require(['../components/Ucenter.vue'],resolve)
		},
		{
			 path: '/new_course',
			name: 'NewCourse',
			component:resolve => require(['../components/NewCourse.vue'],resolve)
		},
		{
			//班课详情
			path: '/course/:id',
			name: 'CourseDetail',
			component: resolve => require(['../components/CourseDetail.vue'], resolve)
		}
  ]
})
