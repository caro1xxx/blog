import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import Subscribe from "../components/Subscribe";
import Head from "next/head";
import { nanoid } from "nanoid";
type Props = {};

const Warp = styled.div`
  width: 50%;
  margin: 0rem auto;
  @media screen and (max-width: 500px) {
    width: 90%;
  }
  cursor: pointer;
  padding: 0.5rem 0;
  padding-top: 70px;
`;

const Url = styled.a`
  color: #0d6efd;
  text-decoration: underline;
  display: block;
`;

const Guide = styled.div`
  text-align: center;
  height: 100px;
  padding-top: 10px;
  animation: loop 1s infinite;
  @keyframes loop {
    0% {
      padding-top: 10px;
    }
    50% {
      padding-top: 0px;
    }
    100% {
      padding-top: 10px;
    }
  }
`;

const about = (props: Props) => {
  return (
    <div>
      <Head key={nanoid()}>
        <title>About</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar></NavBar>
      <Warp>
        <Subscribe></Subscribe>
        <h2>Hello!🎉我是bezos</h2>
        <p>
          该Blog源码
          <Url href="https://github.com/caro1xxx/blog" target={"_blank"}>
            github仓库
          </Url>
        </p>
        <p>
          第一次接触编程还是在初三的时候,认识一个非主流的编程软件(现在觉得只是玩具罢了).虽然它不是那么的专业,但是也是我接触编程计算机世界的第一步台阶.
        </p>
        <p>
          那时我的迷恋于设计出漂亮的UI,没有注重逻辑上的问题.但是还是靠它赚了800RMB.设计的一个App
          <Url
            target={"_blank"}
            href="https://xxxxobncrao1.lanzoum.com/i1cbzdc"
          >
            点我下载
          </Url>
          仅支持安卓内核6.0及之前的版本
        </p>
        <p>
          后来在高中时期学习了C语言,SQL语句,linux基本操作和一些基础的排序,二分,冒泡等算法
        </p>
        <p>
          直到大学后,我选择了前端这条道路.我想我自己是偏喜欢前端页面设计和业务逻辑的.而不是后端繁重的算法.大学课程有python!我是既惊喜又痛苦,惊喜的是我可以利用已知的python学习Django框架,痛苦的是我将分一部分精力到学习Django上面(此处埋下伏笔)
        </p>
        <p>
          到大一下学期时我所付出的精力获得了回报,这个回报因为我能够自己写前端和后端,那么我就有更多的完整项目流程的经验,以及前端如何和后端进行对接,nginx的配置,跨域前后端处理方法...
        </p>
        <p>
          一个人能够写前后端真的可以为所欲为,以至于我后来实现各种我脑中的想法:
          <Url href="https://github.com/caro1xxx/MyOS" target={"_blank"}>
            把Mac os装进browser
          </Url>
          <Url href="https://github.com/caro1xxx/zhihu" target={"_blank"}>
            知否
          </Url>
          <Url href="https://github.com/caro1xxx/Food-diary" target={"_blank"}>
            Food-diary
          </Url>
          <Url
            href="https://github.com/caro1xxx/OOPS-WebFullstack"
            target={"_blank"}
          >
            django rest framework + vue +bootstrap +
            redis前后端分离的资源网站小项目
          </Url>
          <Url
            href="https://github.com/caro1xxx/drawing-tools"
            target={"_blank"}
          >
            网页画图工具
          </Url>
          ......
        </p>
        <Guide>
          <svg
            className="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2349"
            width="50"
            height="50"
          >
            <path
              d="M890.335385 330.911222c-12.576374-12.416396-32.800753-12.352748-45.248112 0.192662L517.248327 661.951458 184.831931 332.512727c-12.576374-12.447359-32.800753-12.352748-45.280796 0.192662-12.447359 12.576374-12.352748 32.831716 0.192662 45.280796l353.311652 350.112082c0.543583 0.543583 1.247144 0.672598 1.792447 1.183497 0.127295 0.127295 0.159978 0.287273 0.287273 0.416288 6.239161 6.175514 14.399785 9.280473 22.527725 9.280473 8.224271 0 16.479505-3.168606 22.720387-9.471415l350.112082-353.311652C902.975407 363.615643 902.880796 343.360301 890.335385 330.911222z"
              p-id="2350"
            ></path>
          </svg>
        </Guide>
        <p style={{ textAlign: "center", marginTop: "100px" }}>
          不甘现状,脱离俗者,奋起反抗,实现自我.愿所有身怀抱负者,终实现心之所想
        </p>
        <p style={{ textAlign: "right", marginTop: "50px" }}>
          Email:caro1xxxhv@gmail.com
        </p>
      </Warp>
    </div>
  );
};

export default about;
