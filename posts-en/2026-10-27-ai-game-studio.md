---
title: "A Non-Developer's Unreal Engine FPS Story"
description: "I built a game studio where I set the direction and make the decisions, and AI team leads handle planning, production and testing. Here are the decisions I made, the moments I changed course, and how problems got solved during the first two days of building UrbanStrike, an Unreal shooter demo."
---

Hello. In this post I'd like to walk you through how I set up an **AI game studio** and spent its first two days building **UrbanStrike**, a shooter demo in Unreal Engine 5.8.

To be clear up front, this isn't a story about "AI making a game on its own." I decided what to build and where to turn, and when problems came up **I corrected the course**. The AI carried out those decisions quickly. So this post is written around the decisions I made.

## I'm not a game developer

I'm a **film VFX artist** with more than 10 years of experience, including Korean and Hollywood productions. I've mostly made FX like explosions, smoke and debris, working mainly in Houdini on film. I didn't know in detail how games actually get made, or what stages and teams a game company runs on. I still haven't worked at a real game company and have no experience there.

Then, while studying AI, I learned about **agent harnesses**: you split the work among several AI agents with different roles and tie them together with rules and a reporting structure. I decided to apply this to game production. The AI takes on the roles of a game company's team leads, and I take on **only direction, approvals and quality judgment as CEO**. My original goal was **to learn and get hands-on with Unreal Engine by building a simple game through MCP**. But Unreal has its own quirks, and a first FPS game is not simple. To solve the problems I ran into, I wondered what would happen if I borrowed the structure of a real game company, so I **planned a way of working with agents** and switched to it.

These were the first prompts I gave when I handed over the planning and design:

> "게임 제작 파이프라인 계획을 게임회사 팀장들 역할을 에이전트 만들고 하네스로 구성해서 계획하고 설계해줘, 기획부터 퍼블리시 유지보수까지 다 포함"
> *(Plan and design a game production pipeline: make agents that play the roles of game company team leads and organize them as a harness, covering everything from planning to publishing and maintenance.)*
>
> "나는 게임회사 CEO 역할이고 나머지 제작 업무들은 에이전트들이 설계 실행 하는 식으로 만들어"
> *(I'm the game company's CEO, and the agents design and carry out the rest of the production work.)*
>
> "각 중요 단계마다 나한테 보고 후 진행
> - 프로그램 설치 다운로드등은 팀장이 자율적 진행
> - 실행전 계획 후 보고, 계획 실행 후 보고, 실행 중간 10분이상 단계 지연시 보고, 각 작업 단계는 최대한 작게 모듈화 해서 관리 및 문서화"
> *(Report to me at each important stage before moving on. Leads can install and download programs on their own. Report the plan before running it, report after running it, and report if a step is delayed more than 10 minutes. Keep each work step as small and modular as possible, and manage and document it.)*

The AI team leads used so much game industry jargon that at first I could barely read their reports. So I set a rule: "List the terms and background knowledge I don't know separately." The glossary that came out of it now has more than 213 entries. To make good decisions, I first had to understand the reports.

> 💡 **My honest take:** Once I actually did the work, I found that developing with AI is **hard without basic knowledge**, more than I expected. Even when the AI writes the code for you, you need basic concepts like engine structure, collision and navigation to decide what to ask for and to judge whether the result is right. Unreal has a lot of features, so there's a lot to learn. Next time I'd like to try **a simpler engine such as Unity or Godot** too.

I'll cover the studio's org chart and operating rules in the next post. This one focuses on **the decisions I made**, **the moments I changed direction**, and **how the problems that came up along the way were solved**.

<video controls playsinline preload="metadata" src="/NeoDevBlog/videos/2026-10-27-us-vslice-v002b-720p.mp4"></video>

*Test video v002, made by the AI with free assets*

## At a glance

| Item | Details |
| --- | --- |
| My role | CEO: deciding scope and direction, approving gates, checking picture and sound, pointing out problems |
| AI's role | 14 team leads: planning, implementation, testing, reporting |
| Engine | Unreal Engine 5.8.3 (Lumen, Nanite, Blueprints + editor Python) |
| Goal | A shooting showcase for a portfolio video, vertical slice approval on November 9 |
| Two-day result | FPS demo → Division-style TPS, enemy AI combat, interior map, 2 cinematics, test video |
| Time | About 41 hours on the clock, of which about 18 hours 15 minutes was actual work |

## Decision 1. I set the scope and the way of working first

The AI's first four open-ended questions were hard to answer. So I changed how it asked questions first.

> "객관식으로 다시 질문해."
> *(Ask me again as multiple choice.)*

With five cards, the scope was set quickly: a portfolio video, a shooting showcase, mostly Blueprints, one to two weeks. I also picked the name **UrbanStrike** from five candidates. Then I set the way of working as well.

- "전체 계획을 이어서, 계속 묻지 말고 작업해." *(Continue with the whole plan and work without asking me every time.)* → autonomous progress once the plan is set
- "실제 프로젝트는 깃허브에 올리지 않고, D 드라이브에서 작업하는 식으로 진행해." *(Don't put the actual project on GitHub; work on the D drive.)* → local git only
- "작업 과정을 나중에 내가 따라 할 수 있도록 제작 튜토리얼 버전으로 분리해서 저장해 줘." *(Save the process separately as a tutorial version so I can follow along later.)* → a 10-part rebuild tutorial

Once that frame was in place, the AI built hitscan shooting, aiming, reloading, recoil, muzzle flash, tracers, shell casings, impact FX for five surface types, and a 40-second alley showcase **in about four hours**.

> 💡 **What I learned:** With AI, setting the question format and the working rules first changes the result. Deciding what needs deciding myself, and then not letting it ask again, was the key to speed.

## Decision 2. I switched from first person to Division-style third person

The enemies were mannequins, so I picked a free soldier character, and I swapped the interior map for an unfinished building asset that could be downloaded remotely.

![Lighting in the unfinished building interior map](../posts/images/2026-10-27-us-unfinished-building.jpg)

Then I made the biggest change of direction in those two days.

> "테스트 적 발 위치를 바닥에 맞게 배치시키고, 게임 카메라를 디비전 같은 TPS 3인칭 스타일로 수정해 줘."
> *(Place the test enemies' feet on the floor, and change the game camera to a third-person TPS style like The Division.)*
>
> "이 영상의 3분 구간에 나오는 장면을 참고해서 카메라랑 모션을 작업해."
> *(Work on the camera and motion using the scene around the 3-minute mark of this video as reference.)*

I judged that a view showing the character and cover would suit a portfolio video better. The AI pulled four frames from the reference section I pointed to and turned the character position and camera distance into numbers. The result: right shoulder at 2.6 m with FOV 70, and 1 m with FOV 55 when aiming.

![Over-the-shoulder TPS camera](../posts/images/2026-10-27-us-tps-camera.jpg)

> 💡 **What I learned:** Instead of describing a "feel," point to the exact section of a reference, and the AI will turn it into numbers.

## Decision 3. 🔥 When the enemies wouldn't move, I decided where to look

In the new interior map, the enemies stood in place and only shot at the floor, and my bullets passed right through them. The AI first suspected the AI brain (StateTree), but it was fine. So I redirected the investigation.

> "적이 움직이는 조건 및 이벤트 데이터 등을 조사해 봐."
> *(Look into the conditions and event data that make the enemies move.)*

All the causes were in the foundations.

> 🔧 **The fix**
> 1. **Empty NavMesh**: the nav bounds volume made by script had a size of 0. We copied the volume from a working map and rebuilt navigation while the editor was idle.
> 2. **Bullets passing through characters**: the characters were ignoring the hit trace channel. We fixed the collision channels so both walls and characters get hit.
> 3. **Enemies shooting the floor**: the aim pitch wasn't following the player. We changed it to aim at the torso.

After those three fixes, the player's HP dropped from 500 to 50. The enemies were finally fighting properly.

![The AI fighting test enemies; it's early work, so lots of bugs are visible.](../posts/images/2026-10-27-us-enemy-combat.jpg)

> 💡 **What I learned:** The human's job was to steer toward the basic conditions first, rather than the parts that looked complicated.

## Decision 4. 🔥 I pointed out what looked wrong on screen

Bullet FX were popping out of the floor and thin air, and a rifle was floating on one side of the screen. Every test passed, but the picture was clearly wrong.

> "총알 이벤트가 총구 끝에서 총구 방향으로만 나오게 하고, 바닥 등 다른 곳에서 나오는 이유를 찾아서 버그 수정해."
> *(Make bullet events come only from the muzzle tip in the muzzle direction, find out why they come from the floor and other places, and fix the bug.)*

The culprit was **a cinematic camera gun placed in the map for filming**. It should only fire while filming, but it kept firing during normal play.

![Before the fix: the filming gun floating on the left of the screen](../posts/images/2026-10-27-us-muzzle-spawn-before.jpg)

> 🔧 **The fix:** We made the filming actor run only while the Sequencer camera is active. Filming rigs must always be kept separate from gameplay.

After that I went through the FX myself and pointed things out one by one. To eyes that have made FX for years, these stood out right away.

| What I pointed out | What the AI fixed |
| --- | --- |
| "총알 반사 이펙트가 랜덤하게 퍼지게 하고 충돌 후 빨리 사라지게 수정해. 디비전 레퍼런스 영상을 참고해서." *(Make the bullet ricochet effect spread randomly and disappear quickly after impact, using the Division reference video.)* | Sparks spread randomly at 55–60° and disappear in 0.1–0.35 seconds |
| "벽에서 나오는 총알 같은 모션을 확인하고, 총알이면 제거, 먼지 같은 인터랙션이면 퍼지게 수정해." *(Check the bullet-like motion coming out of walls; remove it if it's a bullet, make it spread if it's an interaction like dust.)* | Separate handling rules for each FX type |
| "탄피가 바닥에 떨어지게 수정해." *(Make the shell casings fall to the floor.)* | 3–4.5 s lifetime, fixed gravity and collision order, 1–3 bounces on the floor |
| Enemy muzzle flash looked detached from the gun | Attached to the weapon socket instead of world coordinates, 0 misalignments in 120 shots |

![Spark spread before the fix: sparks stretching in a single line](../posts/images/2026-10-27-us-impact-spread-before.jpg)

![Spark spread after the fix: short bursts of debris and dust](../posts/images/2026-10-27-us-impact-spread-after.jpg)

![Enemy muzzle flash position after the fix](../posts/images/2026-10-27-us-muzzle-attach-after.jpg)

> 💡 **What I learned:** Even without knowing the code, if you say precisely that "the sparks linger too long" or "bullets come out of the wrong place," the AI handles finding the cause and fixing it. Spotting what looks wrong was my part.

## Decision 5. 🔥 After seven memory crashes, I made a "stop" rule

The tool that builds Niagara FX v2 by script kept dying in headless runs (no screen). Crash folders piled up to 46, and the same access violation (`EXCEPTION_ACCESS_VIOLATION 0x0`) repeated every one to two minutes. The AI kept repeating the same attempt, so I asked about the schedule first.

> "FX 작업에 하루나 걸리는 이유가 뭐야?"
> *(Why is the FX work taking a whole day?)*
>
> "알았어. 콘크리트 피탄 작업 먼저 해서 보여 줘."
> *(Okay. Do the concrete bullet impact first and show me.)*

Once I had it split the big job and check one piece first, a bisection that ran the steps separately and a trace log recording the last call narrowed down the cause.

> 🔧 **The fix**
> - **Cause 1:** Deleting an existing Niagara asset and then recreating and saving it at the same path crashed inside the engine. → We switched from the asset delete function to deleting the file directly and rescanning the asset registry.
> - **Cause 2:** The call that reads stack warnings right after a build (`GetStackIssues`) caused a hard crash. It isn't a Python exception, so try/except can't catch it. → We turned it off by default and only turn it on when needed.
> - **Result:** 0 crashes across a run of all five systems. But this is a **workaround** that avoids a dangerous call, not a fix for the engine bug, so we test again after engine updates.

Then I set a rule so the same thing wouldn't keep happening.

> "크래시가 반복되면 메모리 버그 확인 등 디버깅 절차를 하네스에 추가해."
> *(If crashes repeat, add a debugging procedure such as checking for memory bugs to the harness.)*

Now if the same crash happens **twice**, the team leads stop retrying and look at the logs first. I go through this procedure in detail in the next post.

## Decision 6. 🔥 I used rules to stop editor conflicts and waiting on approvals

Two AI team leads used one Unreal editor at the same time, and one's work overwrote the other's files.

> 🔧 **The fix:** I approved a rule that uses an `editor.lock` file so **only one team at a time** can write in the editor. We also split write scope by team, and switched to running scripts remotely inside an already open editor, which cut waiting time.

At points that needed human approval, work sometimes stalled for hours. When I saw that work had stopped because I wasn't at my PC, I said this:

> "작업 안 하고 뭐 해? 앞으로 내가 확인해야 할 게 있으면 미리 알려줘."
> *(Why aren't you working? From now on, tell me in advance if there's anything I need to check.)*

After that, **things only a person can do**, like keeping the PC on or clicking an approval, got gathered up and sent to me in advance.

## Decision 7. I listened to the sound and judged it myself

It took seven tries to export the vertical slice test video. Sometimes it recorded an empty screen (0×0), sometimes it came out at 11 frames per second, and sometimes the character died every 11 seconds. Fixing these one at a time with full-screen recording and cropping, GPU capture, and a fixed window size got us v001.

The AI can't hear sound. So I listened to the gunshots myself and judged them, and since the first synthesized gunshots fell short, I **decided to switch to real firearm recordings (Sonniss AK5 and SVD)**. The v002 video above is the result.

> 💡 **What I learned:** For things only a person can do (admin approval, listening checks, leaving the PC free), it's much faster to collect them and ask all at once.

## Decision 8. I had the AI build a shooting range for testing

In the existing maps, it was hard to verify each surface and distance one by one.

> "게임 배경으로 블렌더에서 간단한 모델링으로 총기 테스트 훈련장을 직접 만들어 가져오는 방법을 계획해 줘."
> *(Plan a way to build a firearm test range with simple modeling in Blender and bring it in as a game environment.)*

So we built a 52 × 32 m shooting range in Blender by script and brought it into Unreal. It has five firing lanes (7, 15, 25 and 40 m), five types of surface test walls, and a four-room kill house. We're now testing impact FX for each surface there one at a time.

![Impact tests by surface at the range](../posts/images/2026-10-27-us-range-impact-sheet.jpg)

## The directions and concepts I changed

The most important thing I did as CEO wasn't writing code. It was **deciding to change direction**. Here's everything I changed in those two days.

| When | Original plan | New direction | Why |
| --- | --- | --- | --- |
| Day 1 morning | Plan through open questions | Questions only as multiple-choice cards | Easier to answer, faster decisions |
| Day 1 morning | Check at every step | "Keep going without asking" | Once the plan is set, speed comes first |
| Day 1 morning | Store the project on GitHub | Local drive + local git only | Large project, keep it private |
| Day 1 morning | Only make the result | Separate tutorial version I can follow | So I can rebuild it myself later and learn |
| Day 1 afternoon | Old Power Plant interior map | Unfinished Building | FBX format that could be downloaded remotely |
| Day 1 afternoon | Call of Duty-style first person (FPS) | Division-style over-the-shoulder third person (TPS) | A view showing the character and cover works better for video |
| Day 2 | AI working alone | AI game studio with 14 team leads, me as CEO | Systematic from planning to release and maintenance |
| Day 2 | FX through Houdini Engine | File-based → on hold → **built directly in Niagara** | Version support range, licensing |
| Day 2 | Mostly external assets | A pipeline that builds directly in Blender and Niagara | My own sources I can use in a portfolio |
| Day 2 | Synthesized gunshots | Real firearm recordings | I listened and judged them lacking |
| Day 2 | No performance target | 120 fps on an RTX 5080 | Needed a real game-level standard |
| Day 2 night | Test in existing maps | A shooting range built in Blender | To verify each surface and distance one by one |

In film VFX I was used to finishing one shot, set by the director, all the way through. In games, I needed to **cut scope and take a detour when blocked** far more often. Getting to sit in the seat where those decisions are made was the biggest gain of these two days.

## I follow my decision log on a web console

The AI team leads keep the decisions and progress on a web page. I can see the current stage and gates, test results for each step, the sprint board, and a log of the decisions I made, all on one screen.

**I asked the AI to turn this console into a web page while documenting the work, so I could check progress midway.**

- [UrbanStrike studio console](/NeoDevBlog/en/docs/urbanstrike-studio-console.html) (snapshot from 2026-10-27)

## What's next / to-do list

- Left-hand IK, hooking up impact FX by surface, animation and FX first
- Play-testing the range and measuring performance (target: 120 fps on an RTX 5080)
- Vertical slice approval on November 9

## There's still a lot missing, so I'm still working on it

UrbanStrike is still being built. In the next post I'll introduce how I run this studio, with **the 14 AI team leads and the production pipeline** in detail. I'll keep recording and posting as it goes. Thank you for reading this long post.
