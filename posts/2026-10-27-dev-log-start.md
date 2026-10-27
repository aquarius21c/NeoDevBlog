---
title: "개발기 #0 — 언리얼 AI로 콜 오브 듀티 만들기, 시작합니다"
date: 2026-10-27
description: "왜 이 프로젝트를 시작했는지, 앞으로 무엇을 기록할지 정리했습니다."
tags: [개발기, 언리얼엔진, AI]
draft: true
---

언리얼 엔진으로 **콜 오브 듀티 스타일의 FPS**를 만들면서, 개발 과정에서 AI 도구를 어떻게 쓰는지 기록하려고 합니다. 블로그 글은 유튜브 영상의 대본과 자료로도 사용할 예정입니다.

## 목표

1. 플레이어를 측면으로 돌아 들어오는 **적 AI** 만들기
2. 엄폐, 사격, 재장전이 자연스러운 전투 흐름
3. 짧은 미션 하나를 처음부터 끝까지 플레이할 수 있는 수직 슬라이스

## AI 적의 기본 루프

![적 AI 행동 루프 자리표시 이미지](images/2026-10-27-ai-loop.png)

처음 버전의 적은 아래 네 단계를 반복합니다.

| 단계 | 하는 일 | 언리얼 기능 |
| --- | --- | --- |
| 탐지 | 플레이어를 보거나 듣는다 | AI Perception |
| 판단 | 공격할지 엄폐할지 정한다 | Behavior Tree |
| 이동 | 엄폐물 위치를 찾는다 | EQS |
| 공격 | 조준하고 사격한다 | Gameplay Ability |

```cpp
// 시야에 들어온 대상을 블랙보드에 기록하는 예시
void AEnemyController::OnTargetPerceived(AActor* Actor, FAIStimulus Stimulus)
{
    if (Stimulus.WasSuccessfullySensed())
    {
        GetBlackboardComponent()->SetValueAsObject(TEXT("TargetActor"), Actor);
    }
}
```

> 이 글은 블로그 뼈대를 확인하기 위한 샘플 글입니다. 내용을 고쳐 쓰거나 지워도 됩니다.

## 다음 글 예고

다음 글에서는 Behavior Tree로 적의 첫 번째 순찰 행동을 만들어 봅니다.
