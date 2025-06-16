<demo>
  图标
</demo>

<template>
  <Flex wrap x="start" gap="20px">
    <Button type="blank">小</Button>
    <Button type="primary" is-icon size="small" disabled>
      <Info24Regular />
    </Button>
    <Button type="info" is-icon size="small" disabled>
      <CheckmarkCircle24Regular />
    </Button>
    <Button type="warning" is-icon size="small">
      <Warning24Regular />
    </Button>
    <Button type="error" is-icon size="small">
      <ErrorCircle24Regular />
    </Button>
    <Button type="success" is-icon size="small">
      <AlertUrgent20Regular />
    </Button>
    <Button type="normal" is-icon loading size="small">
      <Alert24Regular />
    </Button>
  </Flex>
  <Flex wrap x="start" gap="20px">
    <Button type="blank">大</Button>
    <Button type="primary" is-icon>
      <Info24Regular />
    </Button>
    <Button type="info" is-icon>
      <CheckmarkCircle24Regular />
    </Button>
    <Button type="warning" is-icon disabled>
      <Warning24Regular />
    </Button>
    <Button type="error" is-icon disabled>
      <ErrorCircle24Regular />
    </Button>
    <Button type="success" is-icon>
      <AlertUrgent20Regular />
    </Button>
    <Button type="normal" is-icon>
      <Alert24Regular />
    </Button>
  </Flex>
  <Flex wrap x="start" gap="20px">
    <Button type="blank">超大</Button>
    <Button type="primary" is-icon size="large">
      <Info24Regular />
    </Button>
    <Button type="info" is-icon size="large">
      <CheckmarkCircle24Regular />
    </Button>
    <Button type="warning" is-icon size="large">
      <Warning24Regular />
    </Button>
    <Button type="error" is-icon size="large">
      <ErrorCircle24Regular />
    </Button>
    <Button type="success" is-icon size="large" disabled>
      <AlertUrgent20Regular />
    </Button>
    <Button type="normal" is-icon size="large" disabled>
      <Alert24Regular />
    </Button>
  </Flex>
</template>

<script lang="ts" setup>
import {
  Info24Regular,
  Warning24Regular,
  CheckmarkCircle24Regular,
  ErrorCircle24Regular,
  Alert24Regular,
  AlertUrgent20Regular,
} from '@vicons/fluent'
</script>
