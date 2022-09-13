<template>
<div class="layout">
		<div class="topnav">
            <div class="logo" >TXY-UI</div>
        <ul class="menu">
            <li>文档</li>
        </ul>
        <span class="toggleAside"></span>
		</div>
		<div class="content">
			<aside>
				<div>菜单</div>
                <div>菜单</div>

            </aside>
			<main>
			    <div>内容1</div>
			    <div>内容2</div>
			    <div>内容3</div>
			    <div>内容4</div>
			    <div>内容5</div>
			    <div>内容6</div>
			    <div>内容7</div>
			    <div>内容8</div>
			    <div>内容9</div>
		    	<div>内容10</div>
		    	<div>内容11</div>
			    <div>内容12</div>
			    <div>内容13</div>
			    <div>内容14</div>
			    <div>内容15</div>
			    <div>内容16</div>
			    <div>内容17</div>
		        <div>内容18</div>
		    	<div>内容19</div>
		    	<div>内容20</div>
			    <div>内容21</div>
		    	<div>内容22</div>
			    <div>内容23</div>
			    <div>内容24</div>
			    <div>内容25</div>
			    <div>内容26</div>
			    <div>内容27</div>
			    <div>内容28</div>
			    <div>内容29</div>
			    <div>内容30</div>
		    	<div>内容31</div>
			    <div>内容32</div>
			    <div>内容33</div>
			    <div>内容34</div>
			    <div>内容35</div>
			    <div>内容36</div>
			    <div>内容37</div>
			    <div>内容38</div>
		       	<div>内容39</div>
			    <div>内容40</div>
		    	<div>内容41</div>
			    <div>内容42</div>
			    <div>内容43</div>
			    <div>内容44</div>
			    <div>内容45</div>
			    <div>内容46</div>
			    <div>内容47</div>
			    <div>内容48</div>
			    <div>内容49</div>
			    <div>内容50</div>
		</main>
	</div>
</div>
</template>
<script lang="ts">

</script>
<style lang="scss" scoped>
.layout {
        height: 100vh;
    }
	.topnav { 
	background: pink;
	position: relative;
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    box-shadow: 0px 1px 1px pink;
	.logo {
        max-width: 6em;
        margin-right: auto;
    }
	.menu {
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;
         >li {
            margin: 0 1em;
        }
}	
.toggleAside{
        display: none;
        width: 24px ;
        height: 24px;
        background-color: red;
        position: absolute;
        left :16px;
        top:50%;
        transform: translateY(-50%);
    }
    @media (max-width:500px) {
        >.menu {display: none;}
        >.logo { margin: 0 auto; }
        >.toggleAside{display: inline-block;    }

    }
}

.content {
        display: flex;
	aside {
		background: lightcyan;
    	width: 150px;
		padding: 16px;
    	padding-top:64px;
        position:fixed;   
        top:0px;
        left:0;
        bottom:0;
        overflow: auto;
		>h2 {margin-bottom: 4px;}
        >ol {
        >li { padding: 4px 0;}
        }
    }
	main {
		flex-grow: 1;
		border-radius: 4px;
    	padding-top:64px;
        padding-left: 16px;
        margin-left: 4px;
        position: fixed; 
		width: calc(100% - 150px);
        top: 0px;
        right: 0;
        bottom: 0;
		background: rgb(245,245,245);
		overflow: auto;
    }
}
    
   
</style>

