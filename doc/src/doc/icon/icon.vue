<template>
    <div class="icon-demo">
        <div class="usage-item">
            <h2>概述</h2>
            <p>图标名称参考font awesome命名习惯</p>
        </div>
        <div class="usage-item">
            <h2>如何使用</h2>
            <h4>方法一：</h4>
            <div class="code">
                <pre><code><span>&lt;<span>i </span><span>class</span>=<span>"noahv-icon noahv-icon-<i style="color: red">icon名称</i>"</span>&gt;&lt;/i&gt;</span></code></pre>
            </div>
            <h4>例如：</h4>
            <div class="code">
                <pre><code><span>&lt;<span>i </span><span>class</span>=<span>"noahv-icon noahv-icon-user"</span>&gt;&lt;/i&gt;</span></code></pre>
            </div>
            <div class="show-icon">图标为：<nv-icon type="user"></nv-icon></div>
            <h4>方法二：</h4>
            <div class="code">
                <pre><code><span>&lt;<span>nv-icon </span><span>type</span>=<span style="color: red">"icon名称"</span>&nbsp;content=<span style="color: red">"icon的说明内容"</span>/&gt;</span></code></pre>
            </div>
            <h4>例如：</h4>
            <div class="code">
                <pre><code><span>&lt;<span>nv-icon </span><span>type</span>=<span>"user-o" content="用户名"</span>/&gt;</span></code></pre>
                <pre><code><span>&lt;<span>nv-icon </span><span>type</span>=<span>"user-o"</span>/&gt;</span></code></pre>
            </div>
            <div class="show-icon">图标为：<nv-icon type="user-o" content="用户名"></nv-icon> &nbsp;<nv-icon type="user-o"></nv-icon></div>
        </div>
        <div class="usage-item">
            <h2>API</h2>
            <NvTable
                :columns="columns"
                :pagination="false"
                :tdata="tdata"
            />
        </div>
        <div class="usage-item">
            <h2>示例（icon名称）</h2>
            <div class="icon-operation">
                <Input v-model="value" placeholder="请输入英文或中文关键词" style="width: 300px" v-on:input="getIcon()"></Input>
                <p class="icon-comment" v-if="result.length > 0 && value.length > 0">筛选出来的图表名称为： {{value}}， 共{{result.length}}个</p>
                <p class="icon-comment" v-else-if="result.length === 0 && value.length > 0">无相应图标， 共0个</p>
                <p class="icon-comment" v-else>展示所有图标，共{{iconList.length}}个</p>
            </div>
            <div class="icon" v-for="item in result">
                <nv-icon :type="item[0]" :content="item[0]"/>
                <p>{{item[0]}}</p>
            </div>
        </div>
    </div>
</template>

<script>
//    import {iconConfig} from '../../../node_modules/saas-framework-vue-icon/iconConfig';
import {iconConfig} from './iconConfig';
let iconArr = iconConfig.iconList;
let iconChObj = {};
let extraIconChArr = [];
let lowerChar;
let reg = new RegExp('[\\u4E00-\\u9FFF]+', 'g');
iconArr.map((item, index) => {
    extraIconChArr = [];
    item.map(char => {
        if (char.length > 1) {
            char.split('').map(c => {
                // 中文：直接拆开
                if (reg.test(char)) {
                    if (extraIconChArr.indexOf(c) === -1) {
                        extraIconChArr.push(c);
                    }
                }
                else {
                    lowerChar = c.toLowerCase();
                    if (extraIconChArr.indexOf(lowerChar) === -1) {
                        extraIconChArr.push(lowerChar);
                    }
                }
            });
        }
        else if (extraIconChArr.indexOf(char) === -1) {
            extraIconChArr.push(char);
        }
    });
    iconChObj[item[0]] = extraIconChArr.concat(item);
});
export default {
    name: 'TableDemo',
    data() {
        return {
            value: '',
            result: iconArr,
            iconList: iconArr,
            iconChObj,
            columns: [
                {
                    title: '属性',
                    key: 'properties'
                },
                {
                    title: '说明',
                    key: 'comment'
                },
                {
                    title: '类型',
                    key: 'type'
                },
                {
                    title: '默认值',
                    key: 'initValue'
                }
            ],
            tdata: [
                {
                    properties: 'type',
                    comment: '图标名称',
                    type: 'string',
                    initValue: '-'
                },
                {
                    properties: 'content',
                    comment: '显示的内容，若配置该属性则自动展示tooltip，否则不展示',
                    type: 'string',
                    initValue: ''
                },
                {
                    properties: 'placement',
                    comment: '提示框出现的位置，可选值有top、top-start、top-end、bottom、bottom-start、bottom-end、left、left-start、left-end、right、right-start、right-end',
                    type: 'string',
                    initValue: 'bottom'
                },
                {
                    properties: 'delay',
                    comment: '延迟显示tooltip',
                    type: 'string|number',
                    initValue: '0'
                },
                {
                    properties: 'always',
                    comment: '是否总显示tooltip',
                    type: 'boolean',
                    initValue: 'false'
                },
                {
                    properties: 'maxWidth',
                    comment: 'tooltip的最大宽度，超出内容会换行',
                    type: 'string|number',
                    initValue: '-'
                },
                {
                    properties: 'offset',
                    comment: 'tooltip的偏移量',
                    type: 'number',
                    initValue: '0'
                }
            ]
        };
    },
    methods: {
        getIcon: function () {
            let value = this.value.toLowerCase();
            let result = [];
            let name;
            let nameCh;
            let nameEnArr = [];
            if (value.length) {
                for (var key in iconChObj) {
                    nameCh = iconChObj[key];
                    nameCh.map(item => {
                        if (item.indexOf(value) !== -1
                                && nameEnArr.indexOf(key) === -1
                        ) {

                            nameEnArr.push(key);
                        }
                    });
                }
                iconArr.map(item => {
                    name = item[0];
                    if (nameEnArr.indexOf(name) !== -1) {
                        result.push(item);
                    }
                });
                this.result = result;
            }
            else {
                this.result = iconArr;
            }
        }
    }
};
</script>
<style lang="less" >
    .icon {
        display: inline-block;
        text-align: center;
        margin-right: 1%;
        margin-bottom: 15px;
        width: 10%;
        min-height: 100px;
        vertical-align: middle;
        i {
            font-size: 35px;
        }
    }
    .icon-demo {
        h2 {
            margin-bottom: 10px;
        }
        h4 {
            margin-bottom: 10px;
        }
        .usage-item {
            margin-bottom: 30px;
            .code {
                border: 1px solid #ededed;
                border-radius: 2px;
                background: #f7f7f7;
                padding-left: 15px;
                margin-bottom: 10px;
            }
            .show-icon {
                margin-bottom: 20px;
            }
        }
        .icon-operation {
            margin-bottom: 30px;
            text-align: center;
            .icon-comment {
            }
            .ivu-input {
                margin-bottom: 15px;
            }
        }
    }
</style>
