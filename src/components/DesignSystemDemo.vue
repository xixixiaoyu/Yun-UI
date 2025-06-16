<template>
  <div class="design-system-demo">
    <div class="demo-header">
      <h1>Yun-UI 设计系统重构展示</h1>
      <p>基于 #79b4a6 主色调的优雅设计系统</p>
    </div>

    <!-- 色彩展示 -->
    <section class="demo-section">
      <h2>色彩系统</h2>
      <div class="color-palette">
        <div class="color-group">
          <h3>主色调</h3>
          <div class="color-row">
            <div class="color-item primary">
              <div class="color-block"></div>
              <span>Primary</span>
              <code>#79b4a6</code>
            </div>
            <div class="color-item primary-hover">
              <div class="color-block"></div>
              <span>Hover</span>
            </div>
            <div class="color-item primary-active">
              <div class="color-block"></div>
              <span>Active</span>
            </div>
          </div>
        </div>

        <div class="color-group">
          <h3>状态色彩</h3>
          <div class="color-row">
            <div class="color-item success">
              <div class="color-block"></div>
              <span>Success</span>
            </div>
            <div class="color-item warning">
              <div class="color-block"></div>
              <span>Warning</span>
            </div>
            <div class="color-item error">
              <div class="color-block"></div>
              <span>Error</span>
            </div>
            <div class="color-item info">
              <div class="color-block"></div>
              <span>Info</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 按钮展示 -->
    <section class="demo-section">
      <h2>按钮组件</h2>
      <div class="button-demo">
        <div class="button-group">
          <h3>基础按钮</h3>
          <div class="button-row">
            <Button type="primary">主要按钮</Button>
            <Button type="normal">普通按钮</Button>
            <Button type="success">成功按钮</Button>
            <Button type="warning">警告按钮</Button>
            <Button type="error">错误按钮</Button>
          </div>
        </div>

        <div class="button-group">
          <h3>文本按钮</h3>
          <div class="button-row">
            <Button type="primary" text>主要文本</Button>
            <Button type="success" text>成功文本</Button>
            <Button type="warning" text>警告文本</Button>
            <Button type="error" text>错误文本</Button>
          </div>
        </div>

        <div class="button-group">
          <h3>按钮尺寸</h3>
          <div class="button-row">
            <Button type="primary" size="small">小按钮</Button>
            <Button type="primary" size="medium">中按钮</Button>
            <Button type="primary" size="large">大按钮</Button>
          </div>
        </div>
      </div>
    </section>

    <!-- 输入框展示 -->
    <section class="demo-section">
      <h2>输入组件</h2>
      <div class="input-demo">
        <div class="input-group">
          <h3>基础输入框</h3>
          <div class="input-row">
            <Input placeholder="请输入内容" size="small" />
            <Input placeholder="请输入内容" size="medium" />
            <Input placeholder="请输入内容" size="large" />
          </div>
        </div>

        <div class="input-group">
          <h3>状态输入框</h3>
          <div class="input-row">
            <Input placeholder="成功状态" status="success" />
            <Input placeholder="警告状态" status="warning" />
            <Input placeholder="错误状态" status="error" />
          </div>
        </div>
      </div>
    </section>

    <!-- 卡片展示 -->
    <section class="demo-section">
      <h2>卡片组件</h2>
      <div class="card-demo">
        <Card title="基础卡片" hoverable>
          <p>这是一个基础卡片的内容区域，展示了新的设计系统中卡片的样式效果。</p>
          <template #footer>
            <Button type="primary" size="small">操作</Button>
          </template>
        </Card>

        <Card title="阴影卡片" shadow>
          <p>这是一个带阴影的卡片，具有更强的视觉层次感。</p>
        </Card>

        <Card title="主题卡片" type="dark">
          <p>这是一个主题色卡片，使用了新的主色调。</p>
        </Card>
      </div>
    </section>

    <!-- 设计原则 -->
    <section class="demo-section">
      <h2>设计原则</h2>
      <div class="principles-grid">
        <div class="principle-card">
          <div class="principle-icon">🎨</div>
          <h3>优雅简洁</h3>
          <p>基于 #79b4a6 主色调，营造清新优雅的视觉体验</p>
        </div>
        <div class="principle-card">
          <div class="principle-icon">🔧</div>
          <h3>一致性</h3>
          <p>统一的设计语言，确保组件间的视觉和交互一致性</p>
        </div>
        <div class="principle-card">
          <div class="principle-icon">♿</div>
          <h3>可访问性</h3>
          <p>遵循 WCAG 标准，确保良好的色彩对比度和可访问性</p>
        </div>
        <div class="principle-card">
          <div class="principle-icon">📱</div>
          <h3>响应式</h3>
          <p>适配多种屏幕尺寸，提供一致的用户体验</p>
        </div>
      </div>
    </section>

    <!-- 主题切换演示 -->
    <section class="demo-section">
      <h2>主题模式</h2>
      <div class="theme-demo">
        <p>Yun-UI 支持明暗主题切换，所有组件都能完美适配两种主题模式。</p>
        <div class="theme-toggle">
          <Button @click="toggleTheme" type="primary">
            {{ isDark ? '切换到浅色主题' : '切换到深色主题' }}
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from '../lib/Button/Button.vue'
import Input from '../lib/Input/Input.vue'
import Card from '../lib/Card/Card.vue'

const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  const html = document.getElementsByTagName('html')[0]
  if (isDark.value) {
    html.classList.add('yun-dark')
  } else {
    html.classList.remove('yun-dark')
  }
}
</script>

<style lang="scss" scoped>
.design-system-demo {
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
  background: var(--yun-bgcolor-0);
  min-height: 100vh;
}

.demo-header {
  text-align: center;
  margin-bottom: 60px;

  h1 {
    font-size: 36px;
    font-weight: var(--yun-title-bold);
    color: var(--yun-text-color-1);
    margin-bottom: 16px;
  }

  p {
    font-size: 18px;
    color: var(--yun-text-color-3);
  }
}

.demo-section {
  margin-bottom: 60px;

  h2 {
    font-size: 24px;
    font-weight: var(--yun-title-bold);
    color: var(--yun-text-color-1);
    margin-bottom: 32px;
    padding-bottom: 12px;
    border-bottom: 2px solid var(--yun-primary-color);
  }
}

.color-palette {
  .color-group {
    margin-bottom: 32px;

    h3 {
      font-size: 18px;
      color: var(--yun-text-color-2);
      margin-bottom: 16px;
    }
  }

  .color-row {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }

  .color-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    .color-block {
      width: 80px;
      height: 80px;
      border-radius: var(--yun-border-radius);
      box-shadow: var(--yun-box-shadow);
    }

    span {
      font-weight: 500;
      color: var(--yun-text-color-2);
    }

    code {
      font-size: 12px;
      color: var(--yun-text-color-4);
      background: var(--yun-bgcolor-2);
      padding: 2px 6px;
      border-radius: 4px;
    }
  }
}

.primary .color-block {
  background: var(--yun-primary-color);
}
.primary-hover .color-block {
  background: var(--yun-primary-color-hover);
}
.primary-active .color-block {
  background: var(--yun-primary-color-active);
}
.success .color-block {
  background: var(--yun-success-color);
}
.warning .color-block {
  background: var(--yun-warning-color);
}
.error .color-block {
  background: var(--yun-error-color);
}
.info .color-block {
  background: var(--yun-info-color);
}

.button-demo,
.input-demo {
  .button-group,
  .input-group {
    margin-bottom: 32px;

    h3 {
      font-size: 16px;
      color: var(--yun-text-color-2);
      margin-bottom: 16px;
    }
  }

  .button-row,
  .input-row {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    align-items: center;
  }
}

.card-demo {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.principles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-top: 32px;
}

.principle-card {
  background: var(--yun-bgcolor-0);
  border: 1px solid var(--yun-border-2);
  border-radius: var(--yun-border-radius);
  padding: 32px 24px;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--yun-box-shadow);
    border-color: var(--yun-primary-color-light2);
  }

  .principle-icon {
    font-size: 48px;
    margin-bottom: 16px;
  }

  h3 {
    font-size: 18px;
    font-weight: var(--yun-title-bold);
    color: var(--yun-text-color-1);
    margin-bottom: 12px;
  }

  p {
    color: var(--yun-text-color-3);
    line-height: 1.6;
    font-size: 14px;
  }
}

.theme-demo {
  text-align: center;
  padding: 40px;
  background: var(--yun-bgcolor-1);
  border-radius: var(--yun-border-radius);
  border: 1px solid var(--yun-border-2);

  p {
    color: var(--yun-text-color-2);
    margin-bottom: 24px;
    font-size: 16px;
  }

  .theme-toggle {
    display: flex;
    justify-content: center;
  }
}
</style>
