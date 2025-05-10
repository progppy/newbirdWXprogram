// pages/timetable/timetable.js
Page({
  data: {
    currentWeek: 1,
    weekData: [
      {
        weekday: "周一",
        date: "9/1",
// 修改示例数据
        courses: [
          { 
            name: "高等数学", 
            time: "8:00-9:40", 
            classroom: "A301",
            note: "带计算器"  // 新增注意项
          },
          { 
            name: "大学英语", 
            time: "10:00-11:40", 
            classroom: "B202",
            note: "带耳机" 
          }
        ]
      },
      {
        weekday: "周二",
        date: "9/2",
        courses: [
          { name: "计算机基础", 
            time: "14:00-15:40", 
            classroom: "实验楼401",
            note: "带电脑" }
        ]
      },
      {
        weekday: "周三",
        date: "9/3",
        courses: []
      },
      // 其他天数数据...
    ]
  },

  // 周数切换
  prevWeek() {
    if (this.data.currentWeek > 1) {
      this.setData
      ({ 
        currentWeek: this.data.currentWeek - 1 
      })
    }
  },

  nextWeek() {
    this.setData
    ({ 
      currentWeek: this.data.currentWeek + 1 
    })
  },

  // 课程点击
  showCourseDetail(e) {
    // 1. 获取点击的课程数据
    const course = e.currentTarget.dataset.course // 从data-course属性获取课程对象
    
    // 2. 构建基础信息内容
    let content = `时间：${course.time}\n教室：${course.classroom}` // 使用模板字符串
    
    // 3. 条件添加注意事项
    if (course.note) { // 检查是否有note字段
      content += `\n注意：${course.note}` // 追加注意事项内容
    }
  
    // 4. 显示模态对话框
    wx.showModal({
      title: course.name,     // 弹窗标题显示课程名称
      content: content,       // 显示组合后的内容
      showCancel: false       // 不显示取消按钮（只有确定按钮）
    })
  },
  TestFunction(){
    this.data.currentWeek += 1
  }
})