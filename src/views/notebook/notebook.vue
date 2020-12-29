<template>
  <div class="mainer">
    <header>
      <section>
        <label for="title" >记事本</label>
        <input 
          v-model="store"
          type="text" 
          id="title" 
          name="title" 
          placeholder="添加事项" 
          required="required" 
          autocomplete="off"
          @keydown.enter="saveStore"
          >
      </section>
    </header>
    <section class="body_mainer">
      <div class="ready">
        <h2>正在进行<span id="todecount">{{total1}}</span></h2>
        <ol id="todolist" class="demo-box">
          <li v-for="(item,index) in data" :key="item">
            <input type="checkbox" @click="changeOld(index)">
            <p>{{item}}</p>
            <a href="javascript:;" @click="deleteData(index)"></a>
          </li>
        </ol>
      </div>
      <div class="allready">
        <h2>已经完成<span id="donecount">{{total2}}</span></h2>
        <ul id="donelist">
          <li v-for="(item,index) in oldData" :key="item">
            <input type="checkbox">
            <p>{{item}}</p>
            <a href="javascript:;" @click="deleOld(index)"></a>
          </li>
        </ul>
      </div>
    </section>

  </div>
</template>

<script src="./notebook.js">
</script>

<style lang="scss" scoped src="./notebook.scss">

</style>