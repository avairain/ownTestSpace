# v-slot
## 父组件 ComponentA  引用了 子组件 ComponentB
```Vue
  // ComponentA
  <component-b>
    <template v-slot:header>
      <div>THIS IS HEADER</div>
    </template>
    <template v-slot:body="propsFromBodySlot">
      <div>THIS IS body</div>
      <div>propsFromBodySlot: {{propsFromBodySlot}}</div>
      <div>propsFromBodySlot是参数来着ComponentB KEY 为 该组件中 对应的 slot 中 v-bind:KEY </div>
    </template>
    <template v-slot:footer>
      <div>THIS IS FOOTER</div>
    </template>
  </component-b>
```

``` Vue
 //
 <div>
    <slot name="header"></slot>
    <!--     -->
    <slot v-bind:KEY="VALUE" name="body"></slot>
    <slot name="footer"></slot>
  </div>

```