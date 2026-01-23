# military_internet_letter

## 1. 프로젝트 개요

**손편지기**는 군 복무 입대를 앞둔 상황에서  
*입대 15일 전 군대 인터넷 편지가 폐지되는 문제*를 직접 해결하기 위해 기획·제작한 웹 서비스입니다.

본 프로젝트는 단순한 웹페이지 구현을 넘어 다음을 목표로 진행되었습니다.

- 실제 사회적·개인적 문제 해결
- 클라이언트–서버 통신 구조 이해
- 서버리스(Serverless) 아키텍처 실습

---

## 2. 결과 화면

## 결과 화면

![Result Screen 1](/result_screen/1.png)
![Result Screen 2](/result_screen/2.png)
![Result Screen 3](/result_screen/3.png)
![Result Screen 4](/result_screen/4.png)

---

## 3. 제작 목적

- 입대 15일 전 군대 인터넷 편지가 폐지되는 문제를 해결하기 위해 자체 인터넷 편지 웹사이트를 기획 및 제작
- 클라이언트–서버 통신을 위한 AJAX, JSON API 코드 실전 작성
- 서버리스 클라우드 서비스인 Google Firebase 사용 경험 확보

---

## 4. 개발 기간

- **2023.08 ~ 2023.08**

---

## 5. 기술 스택

- **언어**: HTML, CSS, JavaScript  
- **백엔드 / 데이터베이스**: Firebase (Realtime Database)  
- **배포**: Netlify  
- **디자인 도구**: Figma  

---

## 6. 배운 점

1. 단순해 보이는 웹페이지도 실제 서비스 수준으로 구현하기 위해 수백~수천 회의 코드 수정이 필요하다는 점을 경험함
2. 개발자에게 중요한 요소는 기술뿐 아니라 끊임없이 문제를 찾아 해결하려는 태도와 끈기임을 체감함
3. AJAX 및 JSON API를 활용한 클라이언트–서버 통신 구조를 실습을 통해 이해함
4. HTML, CSS 기반 UI 구현 과정에서 사용자 관점의 디자인 중요성을 인식함

---

## 7. 문제점 및 해결 방법

### 7.1 Firebase 버전 선택

**문제점**
- Firebase v8: 빠른 코드 작성, 높은 개발 효율
- Firebase v10: 높은 안정성, 다양한 기능, 높은 보안성

**해결 방법**  
개발 기간이 2주로 제한되어 있고 기능이 복잡하지 않은 웹사이트였기 때문에,  
코드 작성 속도와 효율성을 최우선으로 고려하여 Firebase v8을 선택함

---

### 7.2 모바일 기기별 UI 불일치 문제

**문제점**  
PC 테스트에서는 문제가 없었으나 모바일 테스트 시 기기마다 UI가 다르게 표시되는 현상이 발생함

**해결 방법**  
입력창과 div의 고정 길이 설정이 원인임을 확인하였고,  
Div, Fieldset, Input, Padding 크기 및 레이아웃을 조정하여  
해상도에 관계없이 동일한 UI가 유지되도록 수정함

---

### 7.3 촉박한 일정 속 UI 전면 수정

**문제점**  
배포 3일 전 실제 사용자 테스트 과정에서 다수의 UI 관련 피드백을 받음

**해결 방법**  
즉시 새로운 디자인을 의뢰하고 도안을 받은 당일부터 작업을 시작하여  
이틀 만에 새로운 UI 구현을 완료하고 정상적으로 배포함

**핵심 교훈**
> 시도하기 전부터 불가능하다고 판단하지 말자

---

## 8. 협업 방식

- 디자이너와 협업하여 Figma 기반 디자인 도안을 전달받음
- CSS를 직접 작성하여 디자인 도안과 약 99% 유사한 UI 구현

---

## 9. 담당 역할

- 웹페이지 기획
- 프론트엔드 UI 제작
- 백엔드 API 개발 (클라이언트–서버 통신)
- Firebase 데이터베이스 설계 및 구축

---

## 10. 개발 일지 (발췌)

### 2023.08.13
- Chrome, Edge, Mobile 환경에서 Firebase DB 데이터 전송 성공
- 약 150회 이상의 코드 수정 후 구현 완료

### 2023.08.18
- Firebase DB에서 데이터를 가져와 화면에 출력하는 `getData()` 함수 구현

### 2023.08.21
- 최종 버전 완성
- 모바일 사용자를 고려한 사용자 중심 디자인의 중요성을 인식함

### 2023.12
- 웹 서비스를 하이브리드 앱으로 확장하기 위해 React Native 학습 시작

---

## 11. 프로젝트 구조
├─ index.html
├─ next.html
├─ script.js
├─ firebase.json
├─ database.rules.json
├─ netlify.toml


---

## 12. 향후 계획

- React Native를 활용한 하이브리드 모바일 앱 전환
- 모바일 퍼스트(Mobile-first) UX 개선
- 코드 유지보수성과 확장성을 고려한 리팩토링

---

# Hand Letter Web Service

## 1. Project Overview

**Hand Letter** is a web service planned and developed to address the issue caused by the abolition of Army internet letters 15 days prior to military enlistment.

This project goes beyond simple webpage implementation and focuses on the following goals:

- Solving a real-world personal and social problem
- Understanding client–server communication architecture
- Practicing serverless architecture concepts

---

## 2. Result Screen

## 결과 화면

![Result Screen 1](/result_screen/1.png)
![Result Screen 2](/result_screen/2.png)
![Result Screen 3](/result_screen/3.png)
![Result Screen 4](/result_screen/4.png)


---

## 3. Purpose

- To solve the problem caused by the abolition of Army internet letters before enlistment
- To practice writing AJAX and JSON APIs for client–server communication
- To gain hands-on experience with Google Firebase, a serverless cloud service

---

## 4. Development Period

- **August 2023**

---

## 5. Tech Stack

- **Languages**: HTML, CSS, JavaScript  
- **Backend / Database**: Firebase (Realtime Database)  
- **Deployment**: Netlify  
- **Design Tool**: Figma  

---

## 6. Lessons Learned

1. Even simple-looking web services require hundreds or thousands of code revisions to reach production quality
2. Persistence and a problem-solving mindset are essential qualities for developers
3. Gained practical experience with AJAX and JSON-based client–server communication
4. Learned the importance of user-centered UI design through real user feedback

---

## 7. Problems & Solutions

### 7.1 Firebase Version Selection

**Problem**
- Firebase v8: Faster development and higher coding efficiency
- Firebase v10: Higher stability, advanced features, and stronger security

**Solution**  
Due to a limited two-week development period and minimal feature requirements,  
Firebase v8 was selected to maximize development efficiency

---

### 7.2 Inconsistent Mobile UI Across Devices

**Problem**  
UI appeared differently across mobile devices during testing, despite working correctly on PC

**Solution**  
Identified fixed-length input fields and div elements as the root cause  
Refactored layout sizes and spacing to ensure consistent UI across different screen resolutions

---

### 7.3 Full UI Redesign Under Tight Deadline

**Problem**  
Multiple UI-related feedback points were received only three days before deployment

**Solution**  
A new UI design was commissioned and implemented immediately  
Completed the redesign within two days and successfully deployed the service

**Key Takeaway**
> Never decide something is impossible before trying

---

## 8. Collaboration Method

- Collaborated with a web designer
- Received UI designs via Figma
- Implemented the UI using CSS with approximately 99% visual accuracy

---

## 9. Responsibilities

- Planned the overall web service
- Implemented front-end UI
- Developed client–server communication APIs
- Designed and managed the Firebase database

---

## 10. Daily Development Record (Excerpt)

### 2023.08.13
- Successfully sent data to Firebase DB on Chrome, Edge, and mobile devices
- Achieved after approximately 150 code modifications

### 2023.08.18
- Implemented a `getData()` function to fetch and render data from Firebase

### 2023.08.21
- Completed the final version
- Realized the importance of user-centered design, especially for mobile-first services

### 2023.12
- Began studying React Native to convert the web service into a hybrid mobile application

---

## 11. Project Structure
├─ index.html
├─ next.html
├─ script.js
├─ firebase.json
├─ database.rules.json
├─ netlify.toml


---

## 12. Future Work

- Convert the web service into a hybrid mobile app using React Native
- Improve mobile UX with a mobile-first architecture
- Refactor the codebase for maintainability and scalability
