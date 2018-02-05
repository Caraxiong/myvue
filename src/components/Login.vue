<template>
  <div class="login">
    <el-tabs v-model="activeName" class="ui-tab" @tab-click="tabClickHandle">
      <el-tab-pane label="账号登录" name="account">
        <div class="infos">
          <el-row type="flex" align="middle">
            <el-col :span="6">
              <div class="info-left">
                账户
              </div>
            </el-col>
            <el-col :span="18">
                <div class="info-right">
                    <el-input
                        v-model="mobile"
                        placeholder="请输入手机号、注册邮箱"
                        ref="INPUT_LOGIN_USER_ID"
                    ></el-input>
                </div>
            </el-col>
          </el-row>
          <el-row type="flex" align="middle">
            <el-col :span="6">
              <div class="info-left">
                密码
              </div>
            </el-col>
            <el-col :span="18">
                <div class="info-right">
                    <el-input
                        v-model="password"
                        type="password"
                        placeholder="请输入密码"
                        ref="INPUT_LOGIN_PASSWORD"
                    ></el-input>
                </div>
            </el-col>
          </el-row>
          <div class="list-note tr">
            <span @click="forgetPassword">
                <el-button type="text">忘记密码？</el-button>
            </span>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="短信验证码登录" name="mobile">
         <div class="infos">
          <el-row type="flex" align="middle">
            <el-col :span="6"><div class="info-left">手机</div></el-col>
            <el-col :span="18">
              <div class="info-right">
                <el-input
                  v-model="mobile"
                  type="tel"
                  placeholder="请输入手机号"
                  :maxlength="11"
                  ref="INPUT_LOGIN_USER_ID"
                ></el-input>
              </div>
            </el-col>
          </el-row>
          <el-row type="flex" align="middle">
            <el-col :span="6"><div class="info-left">验证码</div></el-col>
            <el-col :span="10">
              <div class="info-right">
                <el-input
                  v-model="smscode"
                  placeholder="短信验证码"
                  ref="INPUT_REGISTER_VERIFY_CODE"
                ></el-input>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="info-right" @click="getSMSCode">
                <el-button
                  type="primary"
                  size="small"
                >获取验证码</el-button>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-tab-pane>
    </el-tabs>
    <div class="btn-panel">
        <el-button type="primary" size="large" @click="login">
            登录
        </el-button>
    </div>
    <div class="login-third-party">
      <h3 class="sec-name">
        <span class="sec-name-text">第三方账号登录</span>
      </h3>
      <el-row>
        <el-col :span="8">
          <a href="javascript:;" @click="thirdPartyLogin">微信</a>
        </el-col>
        <el-col :span="8">
          <a href="javascript:;" @click="thirdPartyLogin">淘宝</a>
        </el-col>
        <el-col :span="8">
          <a href="javascript:;" @click="thirdPartyLogin">微博</a>
        </el-col>
      </el-row>
    </div>
    <div v-if="activeName==='account'" class="btn-panel">
      <el-button type="primary" :plain="true" size="large" @click="goToPage('_register')">手机号快速注册</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      activeName: this.$route.query.tab || 'account',
      username: '',
      password: '',
      mobile: '',
      smscode: ''
    }
  },
  methods: {
    goToPage (path) {
      this.$router.replace(path)
    },
    tabClickHandle (tab) {
      if (tab.name === 'mobile') {
        this.$router.replace({
          query: {
            tab: 'mobile'
          }
        })
      } else {
        this.$router.replace({
          query: {}
        })
      }
    },
    login () {
      this.$message('提交：SUBMIT_LOGIN')
      this.$router.replace('/certs')
    },
    thirdPartyLogin () {
      this.$message('提交：SUBMIT_LOGIN')
      this.$router.replace('/certs')
    },
    register () {
      this.$message(window.localStorage.getItem('__cxdid__'))
    },
    forgetPassword () {
      this.$message('点击：CLICK_LOGIN_FORGET_PASSWORD')
    },
    getSMSCode () {
      this.$message('点击：CLICK_REGISTER_GET_VERIFY_CODE')
    }
  },
  mounted () {
    this.$message('进入：login')
  },
  destroyed () {
    this.$message('离开：login')
  }
}
</script>
