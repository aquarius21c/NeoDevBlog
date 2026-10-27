---
title: "Dev log #0 — Making a Call of Duty-style game with Unreal and AI: here we go"
description: "Why I started this project, and what I plan to write about."
---

While building a **Call of Duty-style FPS** in Unreal Engine, I'm going to document how I use AI tools throughout development. These posts will also serve as scripts and material for YouTube videos.

## Goals

1. Build an **enemy AI** that flanks the player
2. A combat flow where cover, shooting, and reloading feel natural
3. A vertical slice with one short mission playable from start to finish

## The enemy AI's basic loop

![Placeholder image of the enemy AI behavior loop](../posts/images/2026-10-27-ai-loop.png)

The first version of the enemy repeats these four steps.

| Step | What it does | Unreal feature |
| --- | --- | --- |
| Detect | Sees or hears the player | AI Perception |
| Decide | Chooses whether to attack or take cover | Behavior Tree |
| Move | Finds a cover position | EQS |
| Attack | Aims and fires | Gameplay Ability |

```cpp
// Example: record a target that enters sight on the blackboard
void AEnemyController::OnTargetPerceived(AActor* Actor, FAIStimulus Stimulus)
{
    if (Stimulus.WasSuccessfullySensed())
    {
        GetBlackboardComponent()->SetValueAsObject(TEXT("TargetActor"), Actor);
    }
}
```

> This is a sample post for checking the blog skeleton. Feel free to rewrite or delete it.

## Coming up next

In the next post, I'll build the enemy's first patrol behavior with a Behavior Tree.
