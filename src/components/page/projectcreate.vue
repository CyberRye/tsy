<template>
  <div>
    <Row style="background:#eee;padding:20px">
    <Col span="13" offset="6">
    <Card shadow style="text-align: center;font-size: 16px">
    <Form :model="formItem" :label-width="80">
      <FormItem label="项目名称">
        <Input v-model="formItem.input" placeholder="请输入..."></Input>
      </FormItem>
      <FormItem label="部门经理">
        <Select v-model="formItem.select1">
          <Option value="beijing">New York1</Option>
          <Option value="shanghai">London2</Option>
          <Option value="shenzhen">Sydney3</Option>
        </Select>
      </FormItem>
      <FormItem label="项目经理">
        <Select v-model="formItem.select2">
          <Option value="beijing">New York</Option>
          <Option value="shanghai">London</Option>
          <Option value="shenzhen">Sydney</Option>
        </Select>
      </FormItem>
      <FormItem label="参与人员">
        <div>
          <Transfer
            :data="data2"
            :target-keys="targetKeys2"
            filterable
            :filter-method="filterMethod"
            @on-change="handleChange2"></Transfer>
        </div>
      </FormItem>

      <FormItem label="启动时间">
        <DatePicker type="date" placeholder="选择日期" style="width: 200px"></DatePicker>
      </FormItem>
      <FormItem label="重要程度">
        <Slider v-model="formItem.slider" range></Slider>
      </FormItem>
      <FormItem label="备注">
        <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
               placeholder="请留言"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary">Submit</Button>
        <Button style="margin-left: 8px">Cancel</Button>
      </FormItem>
    </Form>
    </Card>
    </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'projectcreate',
  data () {
    return {
      formItem: {
        input: '',
        select1: '',
        select2: '',
        checkbox: [],
        switch: true,
        date: '',
        time: '',
        slider: [0, 50],
        textarea: ''
      },
      data2: this.getMockData(),
      targetKeys2: this.getTargetKeys()
    }
  },
  methods: {
    getMockData () {
      let mockData = []
      for (let i = 1; i <= 20; i++) {
        mockData.push({
          key: i.toString(),
          label: 'Content ' + i,
          description: 'The desc of content  ' + i,
          disabled: Math.random() * 3 < 1
        })
      }
      return mockData
    },
    getTargetKeys () {
      return this.getMockData()
        .filter(() => Math.random() * 2 > 1)
        .map(item => item.key)
    },
    handleChange2 (newTargetKeys) {
      this.targetKeys2 = newTargetKeys
    },
    filterMethod (data, query) {
      return data.label.indexOf(query) > -1
    }
  }
}
</script>

<style scoped>

</style>
