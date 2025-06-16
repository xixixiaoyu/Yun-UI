<demo>
图标
</demo>

<script setup lang="ts">
import {
  Info24Regular,
  Warning24Regular,
  CheckmarkCircle24Regular,
  ErrorCircle24Regular,
  Alert24Regular,
  Earth20Filled,
  Heart20Regular,
} from '@vicons/fluent'
import { Icon } from '@vicons/utils'
</script>

<template>
  <Icon size="24"> <Info24Regular /></Icon>
  <Icon size="28"> <Warning24Regular /></Icon>
  <Icon size="32"> <CheckmarkCircle24Regular /></Icon>
  <Icon size="36"> <ErrorCircle24Regular /></Icon>
  <Icon size="40" tag="div"> <Alert24Regular /></Icon>
  <Icon size="46" color="#b00"> <Heart20Regular /></Icon>
  <Icon size="54"> <Earth20Filled /></Icon>
</template>
