// authRoutes.js

const express = require('express');
const router = express.Router();

// POST路由用于处理用户登录请求
router.post('/login', (req, res) => {
  // 在这里处理用户登录逻辑
});

// GET路由用于处理其他类型的请求
router.get('./user/business-contacts', (req, res) => {
  // 在这里处理获取用户配置文件的逻辑
});

// 导出路由
module.exports = router;
