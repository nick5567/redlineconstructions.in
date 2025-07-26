/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { Box as Box, Fragment as Fragment_1, Link as Link, Heading as Heading, Slot as Slot, Text as Text, Body as Body, Image as Image, HtmlEmbed as HtmlEmbed, Button as Button, Paragraph as Paragraph } from "@webstudio-is/sdk-components-react";
import { Dialog as Dialog, DialogTrigger as DialogTrigger, DialogOverlay as DialogOverlay, DialogContent as DialogContent, DialogClose as DialogClose } from "@webstudio-is/sdk-components-react-radix";


      export const projectId = "b7e13650-86f3-47cc-8929-ff40e19a1c0e";

      export const lastPublished = "2025-07-26T07:53:52.851Z";

      export const siteName = undefined;

      export const breakpoints = [{"id":"xJeou5xD-ZPSvh_xQmigm"},{"id":"q27LwumJRpeWr-2KevzAM","maxWidth":991},{"id":"vJ6Hj6-9uawC16QIPkB7M","maxWidth":767},{"id":"NIuo9sUEVMrgoahxXlZFz","maxWidth":479}];

      export const favIconAsset: string | undefined =
        undefined;

      // Font assets on current page (can be preloaded)
      export const pageFontAssets: string[] =
        ["InstrumentSans-VariableFont_wdth_wght_o3etf9mcJeUAJ0jUkHwMF.ttf"]

      export const pageBackgroundImageAssets: string[] =
        ["Portfolio__Icon_VC6lMDbymwZEJV7H7JBQ3.svg","Contact_Icon_White_67_HWShh4J6gTKgI61jvg.svg"]

      

      const Page = (_props: { system: any; }) => {
let [sheetOpen, set$sheetOpen] = useVariableState<any>(false)
return <Body
className={`w-body`}>
<Box
className={`w-box c11lapjv c1tmx3h cjgcbjj cejhttc chvjn1z c7p2prc czw8boz`}>
<Slot>
<Fragment_1>
<Box
className={`w-box c1sotb2x c1qk1h6g c1osc9n6 c1awg9k3 cyw754m`}>
<Box
className={`w-box c8nk80o c13x75cb cpeqh71 cqq2eg1 c18xl9bf cx9qu6t c1xrbobn ckydxof cunu00i cwy7e20 ctskr9n`}>
<Link
href={"/"}
target={"_self"}
prefetch={"intent"}
className={`w-link c1o8hml3 cejhttc c1ad1g5y c15lgcvk c1f6jgc2 c1qo8o4l clu3ty5`}>
{"Personal Portfolio"}
</Link>
<Box
className={`w-box c8nk80o c1ogvzo5 cqq2eg1 c18xl9bf c1fpug7s`}>
<Link
href={"/about"}
target={"_self"}
prefetch={"intent"}
className={`w-link c1o8hml3 cejhttc c1ad1g5y c15lgcvk c1f6jgc2 c1qo8o4l c2lsnmx clu3ty5`}>
{"About"}
</Link>
<Link
href={"/contact"}
target={"_self"}
prefetch={"intent"}
className={`w-link cejhttc c1o8hml3 c1ad1g5y c15lgcvk c1f6jgc2 c1qo8o4l c2lsnmx clu3ty5`}>
{"Contact"}
</Link>
</Box>
<Dialog
open={sheetOpen}
onOpenChange={(open: any) => {
sheetOpen = open
set$sheetOpen(sheetOpen)
}}>
<DialogTrigger>
<Button
className={`w-button c13pijs9 c1scknq9 c13x75cb c7d3819 cenum42 cnewxw7 ch5h01i c1b9bckd ck9ixjl cf0pfnd c1ad1g5y cz2nl1p c1dt4ltr cn250fx c1busqa9 cgt1h5s c2dclm4 c12hgpsa c122p7hh cmxx3nh c1mxk2vx ccjcf51`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22 22\" fill=\"currentColor\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path fill-rule=\"evenodd\" d=\"M2 5.998a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z\" clip-rule=\"evenodd\"/></svg>"}
className={`w-html-embed`} />
</Button>
</DialogTrigger>
<DialogOverlay
className={`w-dialog-overlay c1sotb2x c1osc9n6 c1qk1h6g c1t7dt52 c68fyns c1b35ja6 c1isnxag cg4lnn c8nk80o c14pfhm5 ci9ibf8 cphaibv`}>
<DialogContent
className={`w-dialog-content c3lk5pa c8nk80o c14pfhm5 c1fk1fd2 cnmj2dw c1ooh0qz c1b35ja6 cvgy7pi c1faj09k c7p2prc c70woon culjnom c115i0ts cpjawy7`}>
<Link
href={"/about"}
target={"_self"}
prefetch={"intent"}
className={`w-link c1o8hml3 cejhttc c1ad1g5y c15lgcvk c1f6jgc2 c1qo8o4l c2lsnmx clu3ty5`}>
{"About"}
</Link>
<Link
href={"/contact"}
target={"_self"}
prefetch={"intent"}
className={`w-link cejhttc c1o8hml3 c1ad1g5y c15lgcvk c1f6jgc2 c1qo8o4l c2lsnmx clu3ty5`}>
{"Contact"}
</Link>
<Box
tabIndex={0}
className={`w-box`} />
<DialogClose
className={`w-close-button c4atwyc c1d27264 c11ay8lg c1uv3blp c1akwp0s cuc67wf c6jpp3q c1qk5zit c8nk80o c13x75cb c7d3819 c1jo05lw cmi3q3b c1scknq9 chbfy8t ch1im86 cn250fx c1drutn0 cz7w4uz`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path fill-rule=\"evenodd\" d=\"M13.566 2.434a.8.8 0 0 1 0 1.132L9.13 8l4.435 4.434a.8.8 0 0 1-1.132 1.132L8 9.13l-4.434 4.435a.8.8 0 0 1-1.132-1.132L6.87 8 2.434 3.566a.8.8 0 0 1 1.132-1.132L8 6.87l4.434-4.435a.8.8 0 0 1 1.132 0Z\" clip-rule=\"evenodd\"/></svg>"}
className={`w-html-embed`} />
</DialogClose>
</DialogContent>
</DialogOverlay>
</Dialog>
</Box>
</Box>
</Fragment_1>
</Slot>
<Box
className={`w-box c3lk5pa c1eq3wrs c6b6nxe c8nk80o c1a6r51h cyrajba citcu8z c15cspf0 c6kwm01 c61x9or c18m0pjh c7in0j3 c14cp74y c1cnh0oy c1hfs0g9 cuyrjma`}>
<Box
className={`w-box c88nee9 culjnom c1j8ubra c1ks3y07 c1mpch1f c1d3r4j5 c8nk80o c14pfhm5 c1a6r51h cyrajba cbjhg1z c30l9u4 cuu498a`}>
<Box
className={`w-box c8nk80o c14pfhm5 cqq2eg1 c18xl9bf`}>
<Heading
className={`w-heading cgiqncz cuuasv7 c1lywmer c1e75frj c1we5scq`}>
{"Industrial Chic: Revamping a Warehouse Space into a Stylish Loft Office"}
</Heading>
<Paragraph
className={`w-paragraph cgiqncz cuuasv7`}>
{"Transforming a vast warehouse space into a stylish loft office to inspire creativity and promote collaboration"}
</Paragraph>
</Box>
<Box
className={`w-box c1ytpk7j cp19w54 c8nk80o c1n9yegh c1f37pet c14pfhm5 c6mllus c2y17za c19jgd6p`}>
<Box
className={`w-box c8nk80o c14pfhm5 c1n9yegh c1f37pet culjnom c1j8ubra`}>
<Text
className={`w-text`}>
{"Client: Creative Agency Solutions"}
{""}
<br />
{""}
{"Category: Commercial"}
</Text>
<Text
className={`w-text`}>
{"Release Date: April 12, 2023"}
</Text>
</Box>
<Text
className={`w-text culjnom c1j8ubra`}>
{"Credits:"}
{""}
<br />
{""}
{"Sofa Design: Bartolomeo Carrol"}
{""}
<br />
{""}
{"Staging: Marina Norbert"}
{""}
<br />
{""}
{"Photography: Jeannie Kidist"}
</Text>
</Box>
</Box>
<Box
className={`w-box c8nk80o c14pfhm5 c1a6r51h cyrajba`}>
<Box
className={`w-box c8nk80o c14pfhm5 c1n9yegh c1f37pet`}>
<Box
className={`w-box c68bo36 c1qutx8k c1outejm c1igsn7p`}>
<Image
src={"/assets/paul-weaver-nWidMEQsnAQ-unsplash_Hd9bvJ49YlnnKKVNOBIT4.jpeg"}
className={`w-image c68bo36 c1661bk4 c1ttc2dv c8fybya`} />
</Box>
<Box
className={`w-box c18m0pjh c1n9yegh c1f37pet c8nk80o`}>
<Box
className={`w-box c68bo36 c1fyjyvq`}>
<Image
src={"/assets/kara-eads-L7EwHkq1B2s-unsplash_hZnqf6_CYa3hSkI38E38B.jpg"}
className={`w-image c68bo36 c1661bk4 c1ttc2dv`} />
</Box>
<Box
className={`w-box c68bo36 c1fyjyvq`}>
<Image
src={"/assets/earl-wilcox-3xpQCOOe6hM-unsplash_2NerSMvO382JJHUQu1XdM.jpg"}
className={`w-image c68bo36 c1661bk4 c1ttc2dv`} />
</Box>
</Box>
</Box>
<Box
className={`w-box c8nk80o c14pfhm5 cnhmrg7 cv8693i`}>
<Text
className={`w-text c1ytpk7j cp19w54 c6mllus`}>
{"About the Project"}
</Text>
<Paragraph
className={`w-paragraph cgiqncz cuuasv7`}>
{"The design concept centered around embracing the industrial character of the space while infusing it with contemporary elements. We reimagined the raw concrete walls and exposed ductwork as design features, highlighting their inherent beauty. To enhance natural light and create an open atmosphere, large windows were installed, allowing the space to be flooded with daylight."}
</Paragraph>
</Box>
<Box
className={`w-box c8nk80o c14pfhm5 c1n9yegh c1f37pet`}>
<Box
className={`w-box`}>
<Image
src={"/assets/lakeisha-bennett-WzP3YnV9T-U-unsplash_KqsPo2JMqnCIIap7zS7Cb.jpg"}
className={`w-image c68bo36 c1661bk4 c1ttc2dv c1xkrcu9 c1igsn7p`} />
</Box>
<Box
className={`w-box`}>
<Image
src={"/assets/spacejoy-9M66C_w_ToM-unsplash_-2-5_TNecwsjZ5uxYh0DK.jpg"}
className={`w-image c68bo36 c1661bk4 c1ttc2dv cimhlci c1igsn7p`} />
</Box>
<Box
className={`w-box`}>
<Image
src={"/assets/toa-heftiba-FV3GConVSss-unsplash_8-PVVNvxXIt_GxAes0rKV.jpeg"}
className={`w-image c68bo36 c1661bk4 c1ttc2dv c8fybya c1igsn7p`} />
</Box>
</Box>
<Box
className={`w-box c8nk80o c14pfhm5 cnhmrg7 cv8693i`}>
<Text
className={`w-text c1ytpk7j cp19w54 c6mllus`}>
{"The Results"}
</Text>
<Paragraph
className={`w-paragraph cgiqncz cuuasv7`}>
{"Upon completion, the transformed warehouse space became a striking and functional loft office that aligned perfectly with Creative Agency Solutions' vision. The project received high praise from the client, with employees expressing enthusiasm about the inspiring environment that encouraged collaboration and innovation."}
</Paragraph>
</Box>
</Box>
</Box>
<Slot>
<Fragment_1>
<Box
className={`w-box chvjn1z c7p2prc`}>
<Box
className={`w-box c1bsu9b6 c1nt4a8i c3lk5pa c1eq3wrs c6b6nxe c1rllvmm co923ah c15cspf0 c6kwm01 c18m0pjh c7in0j3 c14cp74y c1hfs0g9 cuyrjma`}>
<Heading
className={`w-heading cub4387 c1k14icg cgiqncz cuuasv7 c1lywmer c1e75frj c8nk80o c1n9yegh cyrajba c15lgcvk c1we5scq c2ueoyp c18m0pjh`}>
{"Interested in Working Together?"}
</Heading>
<Box
className={`w-box c8nk80o c13x75cb cpeqh71 c1ivme3m cd1rmow c1e3pejf c1t418cu cfzi32s c67ehv8 c8og876 ceob71o c1gzwxt8 c9zn0lm c2md8t4 c2ueoyp`}>
<Slot>
<Fragment_1>
<Link
target={"_self"}
href={"/contact"}
prefetch={"intent"}
className={`w-link cnhmrg7 cv8693i c1mfbi5p c1wfmwzd c1ml36c7 cu2b06e c1ivme3m cd1rmow c1e3pejf c1t418cu c9jfr10 c4efqah c4xxk3j c1dvfaiy c1f6jgc2 cejhttc c8nk80o c13x75cb cyqg6ud c1c40v9p cjq2ygk c91j3x2 cmk8m2m c13trlse c13qd8os c16v63p8 cerjnw5 c2j77oj c8iap09 c12qkri5 co72ipd`}>
<Text
className={`w-text c15lgcvk culjnom c1j8ubra c1o8hml3 c1ad1g5y c1f6jgc2 c1ikruxj cgkv1i6 c2j1ib6 czdgac1 c2rlnec c1018fpl c1drvvcc c1uvcgfx cerhosx c1qo8o4l`}>
{"Get in touch"}
</Text>
</Link>
</Fragment_1>
</Slot>
<Heading
className={`w-heading cgiqncz cuuasv7 c1lywmer c1e75frj cub4387 c1k14icg c15lgcvk c1we5scq c1m5tofo csm9ex7`}>
{"Get In Touch Today"}
</Heading>
</Box>
</Box>
</Box>
</Fragment_1>
</Slot>
<Slot>
<Fragment_1>
<Box
className={`w-box cz2kf56 c7p2prc`}>
<Box
className={`w-box c1bsu9b6 c1nt4a8i c3lk5pa c1eq3wrs c6b6nxe c1rllvmm cynkcnm c8nk80o c1a6r51h cyrajba cpeqh71 c15cspf0 c6kwm01 c18m0pjh c7in0j3 c14cp74y c1hfs0g9 cuyrjma c2ueoyp`}>
<Box
className={`w-box c8nk80o c14pfhm5`}>
<Heading
className={`w-heading c1lywmer c1e75frj c15lgcvk cgiqncz culjnom c1j8ubra c1we5scq c1m5tofo c175li3f`}>
{"Personal Portfolio"}
</Heading>
<Text
className={`w-text c1ytpk7j c6mllus c1i2stb4`}>
{"All content copyright © 2023 Webstudio Inc."}
{""}
<br />
{""}
{"This template is made with Webstudio!"}
</Text>
</Box>
<Box
className={`w-box c8nk80o cir24w6 c1b6azdr`}>
<Box
className={`w-box c8nk80o c14pfhm5 c1n9yegh c1f37pet culjnom c1j8ubra c1m5tofo`}>
<Link
href={"/"}
target={"_self"}
prefetch={"intent"}
className={`w-link cejhttc c1f6jgc2 c15lgcvk c1ytpk7j c1lywmer clu3ty5`}>
{"Home"}
</Link>
<Link
href={"/about"}
target={"_self"}
prefetch={"intent"}
className={`w-link cejhttc c1f6jgc2 c15lgcvk c1ytpk7j c1lywmer clu3ty5`}>
{"About"}
</Link>
<Link
href={"/contact"}
target={"_self"}
prefetch={"intent"}
className={`w-link cejhttc c1f6jgc2 c15lgcvk c1ytpk7j c1lywmer clu3ty5`}>
{"Contact"}
</Link>
</Box>
<Box
className={`w-box c8nk80o c14pfhm5 c1n9yegh c1f37pet culjnom c1j8ubra c1m5tofo`}>
<Link
href={"https://twitter.com/home"}
target={"_blank"}
prefetch={"none"}
className={`w-link cejhttc c1f6jgc2 c15lgcvk c1ytpk7j c1lywmer clu3ty5`}>
{"Twitter ↗"}
</Link>
<Link
href={"https://www.facebook.com/"}
target={"_blank"}
prefetch={"none"}
className={`w-link cejhttc c1f6jgc2 c15lgcvk c1ytpk7j c1lywmer clu3ty5`}>
{"Facebook ↗"}
</Link>
<Link
href={"https://www.pinterest.com/"}
target={"_blank"}
prefetch={"none"}
className={`w-link cejhttc c1f6jgc2 c15lgcvk c1ytpk7j c1lywmer clu3ty5`}>
{"Pinterest ↗"}
</Link>
<Link
href={"https://www.linkedin.com/feed/"}
target={"_blank"}
prefetch={"none"}
className={`w-link cejhttc c1f6jgc2 c15lgcvk c1ytpk7j c1lywmer clu3ty5`}>
{"LinkedIn ↗"}
</Link>
</Box>
</Box>
<Text
className={`w-text c1ytpk7j c13pijs9 c1ikruxj c6mllus c1vu9gqi`}>
{"All content copyright © 2023 Webstudio Inc."}
{""}
<br />
{""}
{"This template is made with Webstudio!"}
</Text>
</Box>
</Box>
<a
href={"https://webstudio.is/?via=badge"}
target={"_blank"}
className={`w-element c1qw1566 c1cwdvcv c1xggkzv c13x75cb c7d3819 c1sotb2x c1lvvlgh c1mfbi5p c1r8ow2h c1wfmwzd c1nl8f8o c5mxgt2 c1cioz46 c1tb56a0 c5msy9o c8056mw c1ad1g5y cmebbpp c19eixaq cm5qwnj c1k32nrs c40h0uf c1f6jgc2 c1czqz82 cxbwle7 c1olsrci c1q3n1l7 ci0a9qm`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\" viewBox=\"0 0 16 16\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path fill-rule=\"evenodd\" d=\"m12.32 12.416 2.62-8.085a1.205 1.205 0 1 0-2.292-.746l-2.62 8.084a1.205 1.205 0 1 0 2.292.747Z\" clip-rule=\"evenodd\"/><path fill-rule=\"evenodd\" d=\"M8 7.624c.297 0 .517.175.704.394.207.243.373.545.514.866.634 1.44.753 3.241.753 3.241a1.206 1.206 0 0 0 1.285 1.122 1.207 1.207 0 0 0 1.12-1.287s-.16-2.25-.952-4.05C10.744 6.364 9.594 5.208 8 5.208c-1.594 0-2.744 1.156-3.424 2.7-.792 1.8-.951 4.05-.951 4.05a1.207 1.207 0 0 0 1.12 1.288 1.206 1.206 0 0 0 1.284-1.122s.119-1.8.753-3.24a3.52 3.52 0 0 1 .514-.867c.187-.22.406-.394.704-.394Z\" clip-rule=\"evenodd\"/><path fill-rule=\"evenodd\" d=\"M5.973 11.669 3.352 3.585a1.205 1.205 0 1 0-2.293.746l2.622 8.084a1.205 1.205 0 1 0 2.292-.746Z\" clip-rule=\"evenodd\"/></svg>"}
className={`w-html-embed c1jru4eg c10c7zpi cvjor4z c1j8ubra`} />
<div
className={`w-element`}>
{"Built with Webstudio"}
</div>
</a>
</Fragment_1>
</Slot>
<Slot>
<Fragment_1>
<Link
href={"https://webstudio.is/"}
prefetch={"none"}
target={"_self"}
aria-label={""}
rel={"nofollow"}
className={`w-link c19qz7wv c1sotb2x c5mxgt2 c1cioz46 ciczvz4 c1mfbi5p c1wfmwzd c1r8ow2h c1nl8f8o c1ffxanp c1ejq3ur cpu5vp4 cdudh13 csz3l39 c12e8323 c1czqz82 c1wtbka8 cxbwle7 cc9vr3t c8nk80o c1xggkzv c1cwdvcv c87zxbu c1f6jgc2 cc7l5r4 c15qos1m cjryxmg c1qml65g c1k0upc9 cg2k4z6 c1rr2dg6 c1ggqdn cro475l cesp10d`}>
<Image
src={"/assets/logo-icon-color_7lPMMn5N1_sztj7QUZvvx.svg"}
alt={""}
loading={"eager"}
aria-hidden={true}
className={`w-image c4d1sdx c10c7zpi`} />
<Text
className={`w-text c7yzlmz c1ad1g5y cejhttc`}>
{"Built with Webstudio"}
</Text>
</Link>
</Fragment_1>
</Slot>
</Box>
</Body>
}


      export { Page }
    