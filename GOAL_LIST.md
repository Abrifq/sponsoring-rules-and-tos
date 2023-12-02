# Goal List / Hedefler Listesi

:tr: : Listenin bakımı benim için kolay olsun diye bu liste ingilizce tutulacak.
:us: : This list will be written in English since it will be easier to maintain for me.

This list does not represent a linear timeline. I might jump from one task to another.

## General Goals

- [ ] Starting goals
  - [ ] Define Goals
  - [ ] Define Tiers
    - [ ] Name Tiers
    - [ ] Write bonuses for the Tiers
  - [ ] Define Bonuses
    - [ ] Da usage
    - [ ] Da rulez
    - [ ] Da backlinks to tiers

- [ ] Detailed Goals (Starting goals define these)
  - [ ] Bonus' Platforms
    - [ ] Account Manager: account.domain
      - [ ] Setup Github linking
      - [ ] Setup Discord linking
      - [ ] Setup Account verification
      - [ ] Setup Account creating for public
      - [ ] Mail relays?
    - [ ] Platform: FeatureHunt
      - [ ] Setup Account Linking
      - [ ] Setup Credit system
      - [ ] Setup feature tracking system
      - [ ] Write Tests, hold logs.
        - [ ] Write notifiers for the logs, when a filtered event occurs.

- [ ] Finishing Touches
  - [ ] Create a vitepress template for sponsor-docs. (Should have navbar support) (I need to learn vitepress "just enough" for my use case, I'll probably get inspired by [mermaid-js](https://github.com/mermaid-js/mermaid)' [documentation](https://github.com/mermaid-js/mermaid/tree/develop/packages/mermaid/src/docs))
  Notes:
  I want a navbar with folder navigation. <https://docs.github.com/en/packages> is a great example, it has a folder as a normal link, and it has child links. <!-- <https://github.com/github/docs/blob/3b5bc8787c099ec90b4a337f34fcb1cdb510ac13/src/landings/components/SidebarProduct.tsx#L85> -->
    - [X] Publish via Vitepress
  - [ ] Churn through sponsoring logs, in the case of a support was made before the bonus was available, try to provide the bonus or compensate it.

## Website Pages

- Sponsoring index page
  - Sponsoring rules
  - Tiers intro page
    - Page per Sponsoring Type
      - Page per Sponsoring Tier
  - Projects intro page
    - Page per project:
      - Platform description
      - Platform features
      - Platform rules
      - sponsoring benefits

## Platform bonuses

This section is mostly providing links to refer to certain platform while talking about them on [#tiers](#tiers) section.

### Login with us

[account]: #login-with-us

Create a platform account, view your data, change privacy settings and chat $^*$, all in one place.

> Please note that chat feature will be limited to [Discord][offical-discord] and managing chat won't be properly possible until a chat platform is built for this. Which is a low priority, you know, Discord exists already.

Perhaps provide an API for 3rd party users (self-bots, other OSS clients, etc.). Free with a small quota, needs a verification.

Accounts can be linked to Github and Discord for other features/platforms
Accounts have warm (frequently accessed) info and cold (rarely accessed) info:

- Warm
  - account_uuid
  - username
  - profile_name (P.S. guys, use made up names if you are worried of your name leaking.)
  - pronouns (I'm not the pronoun guy but people _will_ want this eventually)
  - profile_picture_url
  - [profile_badges][badge]
- Cold
  - Badge details
  - Supporter details
  - Relay email - (better than giving out your real email to 3rd parties)

#### Supporter pyramid

Mostly a flex thing.

Depending on your tier you'll be placed on a row of the support pyramid

#### Badges

[badge]: #badges

Flair and maybe rank access to some [discord][offical-discord] channels, I don't know.

### Feature Hunter

This one uses your [account][account] to tie info and reputation to you.

Feature Hunter has two sides, [bidding on a feature][feature-bid] and [freelancing][bid-hunting].
This platform will use a currency called **credits** instead of actual money, since paying out with foreign currencies will be harder for me as a small business, for now.

To avoid setting up a e-shop too early in the project, the only way to **buy** credits is through Github Sponsors.

This feature will use/provide a webhook for project progresses at some point.

#### Put some bounty on a project request

[feature-bid]: #put-some-bounty-on-a-project-request

This feature consumes credits from your account. You cannot overdraft credits.
You can request a feature on a open source project or request the project itself, (this one should allow partial payouts per feature)
all by putting a bounty with your request.

Financial incentive will always motivate people.

Once someone eligible approves the work done, the bounty will be sent to the freelancer.

The eligible person might be

1. Original Bounty Poster (a.k.a. OBP)
2. A secondary BP chosen by the OBP or a moderator (this will be used in case)
3. A platform moderator in case of both the OBP and SBP is unavailable

#### Work on a request with bounty

[bid-hunting]: #work-on-a-request-with-bounty

You can work on bounties put on by other people, and gain credits this way.

### Discord

[offical-discord]: #discord

Before fully building a forum, this will be the main chat place.
After building the forum, there might be a chat bridge, like there is in matrix.

[The badges][badge] you earn might allow you to access certain channels.

## Tiers

<!-- (If I want to make this really confusing, I can add things like "first time bonus" and "1 year loyalty bonus", I dunno, lol.) -->

Hierarchy:

- Tier name
  Description, target bonuses, maybe a motto or even a price suggestion, I dunno.

### One Time supports

The ones where the tier does not cost you again and again unless you buy it again.

#### Founder: I was here

Suggested Price: $0.99
Motto: "Flex on newcomers with a badge and date of your first support."
Stating that you were supporting me while the platforms were building.
Founder tiers will have it's profile badge. Founder tiers will disappear after the sponsoring platform is "done".
This tier should be buyable only once.

#### Coffee addiction support

Suggested price: $0.99?
Motto: "You can help me get over my coffee addiction by sending more coffee! I will get tired eventually."

#### Founder: Meal's on me

Suggested price: $9.99
"You are covering my meal by sending me the delivery fee? How nice of you!"
Founder tiers will have it's profile badge. Founder tiers will disappear after the sponsoring platform is "done".

#### Meal's on me

Suggested price: $19.99
"You are covering my meal by sending me the delivery fee? How nice of you!"

TODO: ADD CREDIT ONLY PACKAGE FOR FEATURE HUNT

### Monthly supports

The ones where the tier you buy is automatically renewed with money each month.

#### Nothing to watch

Suggested price: $9.99
"Can't found anything to watch? Well, I can keep my show going if you support me! Waste it **here** instead of **_there_**"

#### Founder: Pinky promise

Suggested price: $1.99
Motto: "Flex on newcomers while building up the bonuses!"
Founder tiers will have it's profile badge. Founder tiers will disappear after the sponsoring platform is "done".
Make the first month $0.99, like ["I was here" tier](#founder-i-was-here).
Probably same bonuses as "I was here" tier as well.

TODO: ADD CREDIT ONLY PACKAGE FOR FEATURE HUNT, STARTS SAME WITH THE ONE-TIME PACKAGE AND THEN IS CHEAPER FOR THE NEXT MONTHS.
