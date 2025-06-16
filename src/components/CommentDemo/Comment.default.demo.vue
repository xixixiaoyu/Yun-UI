<demo>基础用法</demo>

<template>
  <div style="width: 600px; margin: 0 auto">
    <Comment>
      <template #avatar>
        <Avatar src="https://q1.qlogo.cn/g?b=qq&s=100&nk=1057072668" alt="avatar" round />
      </template>
      <template #header>
        <Flex x="start">
          <div class="nickname">蛇断了条腿</div>
          <Tag size="small" type="info">作者</Tag>
          <div class="datetime">1天前</div>
        </Flex>
      </template>
      <template #content>
        <div class="content">
          这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容
        </div>
      </template>
      <template #footer>
        <div style="margin-top: 10px">
          <Button size="small" is-text type="normal">
            <Chat24Regular style="width: 14px" />
            <span>回复</span>
          </Button>
        </div>
      </template>
    </Comment>
    <Comment style="padding: 20px 0px 0px 50px">
      <template #avatar>
        <Avatar src="https://q1.qlogo.cn/g?b=qq&s=100&nk=1057072668" alt="avatar" round />
      </template>
      <template #header>
        <Flex x="start">
          <Tag size="small" bold type="error">公爵</Tag>
          <div class="nickname">蛇断了条腿</div>
          <div class="datetime">1天前</div>
        </Flex>
      </template>
      <template #content>
        <div class="content">
          这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容
        </div>
      </template>
      <template #footer>
        <div style="margin-top: 10px">
          <Button size="small" is-text type="normal">
            <Chat24Regular style="width: 14px" />
            <span>回复</span>
          </Button>
        </div>
      </template>
    </Comment>
    <Comment style="padding: 20px 0px 0px 50px">
      <template #avatar>
        <Avatar src="https://q1.qlogo.cn/g?b=qq&s=100&nk=1057072668" alt="avatar" round />
      </template>
      <template #header>
        <Flex x="start">
          <Tag size="small" bold type="error">公爵</Tag>
          <div class="nickname">蛇断了条腿</div>
          <div class="datetime">1天前</div>
        </Flex>
      </template>
      <template #content>
        <div class="content">
          这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容
        </div>
      </template>
      <template #footer>
        <div style="margin-top: 10px">
          <Button size="small" is-text type="normal">
            <Chat24Regular style="width: 14px" />
            <span>回复</span>
          </Button>
        </div>
      </template>
    </Comment>
    <Comment style="padding: 20px 0px 0px 50px">
      <template #avatar>
        <Avatar src="https://q1.qlogo.cn/g?b=qq&s=100&nk=1057072668" alt="avatar" round />
      </template>
      <template #header>
        <Flex x="start">
          <Tag size="small" bold type="error">公爵</Tag>
          <div class="nickname">蛇断了条腿</div>
          <div class="datetime">1天前</div>
        </Flex>
      </template>
      <template #content>
        <div class="content">
          这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容
        </div>
      </template>
      <template #footer>
        <div style="margin-top: 10px">
          <Button size="small" is-text type="normal">
            <Chat24Regular style="width: 14px" />
            <span>回复</span>
          </Button>
        </div>
      </template>
    </Comment>
    <Comment style="padding: 20px 0px 0px 50px">
      <template #avatar>
        <Avatar src="https://q1.qlogo.cn/g?b=qq&s=100&nk=1057072668" alt="avatar" round />
      </template>
      <template #header>
        <Flex x="start">
          <Tag size="small" bold type="error">公爵</Tag>
          <div class="nickname">蛇断了条腿</div>
          <div class="datetime">1天前</div>
        </Flex>
      </template>
      <template #content>
        <Input style="width: 100%" type="textarea" class="content" />
      </template>
      <template #footer>
        <Flex x="start" style="margin-top: 10px">
          <Button size="small">回复</Button>
          <Button type="normal" size="small" style="margin: 0">取消</Button>
        </Flex>
      </template>
    </Comment>
  </div>
</template>

<script setup lang="ts">
import { Chat24Regular } from '@vicons/fluent'
</script>

<style lang="scss" scoped>
.nickname {
  font-size: 14px;
  font-weight: bold;
  color: var(--lew-text-color-4);
  white-space: nowrap;
}
.datetime {
  font-size: 12px;
  color: var(--lew-text-color-7);
  white-space: nowrap;
}
.content {
  margin-top: 10px;
}
</style>
