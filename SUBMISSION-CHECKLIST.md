# Submission Checklist

Use this checklist to ensure you have all required deliverables before submission.

---

## 📋 1. Backlog & Sprint Plans (25% - Agile Practice)

### Required Documents
- [x] `docs/backlog.md` - Complete product backlog with 7 user stories
- [x] `docs/definition-of-done.md` - DoD criteria
- [x] `docs/sprint0-plan.md` - Planning sprint summary
- [x] `docs/sprint1-plan.md` - Sprint 1 plan with selected stories
- [x] `docs/sprint2-plan.md` - Sprint 2 plan with selected stories

### Verification Checklist
- [ ] All user stories have acceptance criteria
- [ ] All user stories have story point estimates
- [ ] All user stories are prioritized
- [ ] Sprint plans show selected stories
- [ ] Definition of Done is comprehensive
- [ ] Sprint 0 shows planning activities

---

## 💻 2. Codebase (20% - Prototype Quality)

### Required Files
- [x] `src/app.js` - Main Express application
- [x] `src/models.js` - TaskManager data model
- [x] `src/server.js` - Server entry point
- [x] `package.json` - Dependencies and scripts
- [x] `README.md` - Project documentation
- [x] `.gitignore` - Git ignore rules

### GitHub Repository
- [ ] Repository created on GitHub
- [ ] All code pushed to repository
- [ ] README is clear and complete
- [ ] Repository is public or accessible

### Verification Checklist
- [ ] Application runs without errors: `npm start`
- [ ] All endpoints work correctly
- [ ] Code follows JavaScript/Node.js standards
- [ ] No hardcoded credentials
- [ ] No commented-out code

---

## 🔄 3. CI/CD Evidence (25% - DevOps Practice)

### Required Files
- [x] `.github/workflows/ci.yml` - GitHub Actions pipeline

### Screenshots Needed (Create during sprints)
- [ ] Screenshot of successful pipeline run
- [ ] Screenshot of failed pipeline run (if any occurred)
- [ ] Screenshot showing pipeline configuration
- [ ] Screenshot of pipeline logs

### Verification Checklist
- [ ] Pipeline runs automatically on push
- [ ] Pipeline runs tests
- [ ] Pipeline validates health endpoint
- [ ] Pipeline shows in GitHub Actions tab
- [ ] Screenshots saved in `docs/evidence/` folder

**Action:** Create `docs/evidence/` folder and add screenshots

---

## ✅ 4. Testing Evidence (Part of DevOps 25%)

### Required Files
- [x] `tests/app.test.js` - Complete test suite

### Screenshots Needed
- [ ] Screenshot of Jest output showing all tests passing
- [ ] Screenshot of coverage report (>80%)
- [ ] Screenshot of test execution in CI/CD

### Verification Checklist
- [ ] All tests pass locally
- [ ] Test coverage > 80%
- [ ] Tests cover success and error cases
- [ ] Tests run in CI/CD pipeline
- [ ] Screenshots saved in `docs/evidence/` folder

---

## 📊 5. Sprint Review Documents (Part of Delivery 20%)

### Required Documents
- [x] `docs/sprint1-review.md` - Sprint 1 review template (FILL IN)
- [x] `docs/sprint2-review.md` - Sprint 2 review template (FILL IN)

### Content Required
- [ ] Sprint 1 review completed with:
  - [ ] All completed stories listed
  - [ ] Demo screenshots/descriptions
  - [ ] Sprint metrics filled in
  - [ ] Challenges documented
- [ ] Sprint 2 review completed with:
  - [ ] All completed stories listed
  - [ ] Demo screenshots/descriptions
  - [ ] Sprint metrics filled in
  - [ ] Improvements applied documented

---

## 🔍 6. Retrospectives (10% - Reflection)

### Required Documents
- [x] `docs/sprint1-retrospective.md` - Sprint 1 retro template (FILL IN)
- [x] `docs/sprint2-retrospective.md` - Sprint 2 final retro template (FILL IN)

### Content Required
- [ ] Sprint 1 retrospective completed with:
  - [ ] What went well (at least 2 points)
  - [ ] What didn't go well (at least 2 points)
  - [ ] Specific improvements for Sprint 2 (at least 2)
  - [ ] Honest reflection, not generic
- [ ] Sprint 2 retrospective completed with:
  - [ ] Results of Sprint 1 improvements
  - [ ] What went well (at least 2 points)
  - [ ] What didn't go well (at least 2 points)
  - [ ] Key lessons learned (at least 3)
  - [ ] Overall project reflection

---

## 🔄 7. Delivery Discipline (20%)

### Git Commit History
- [ ] Repository initialized
- [ ] Multiple commits throughout each sprint
- [ ] Commit messages are meaningful
- [ ] No "big-bang" commits at the end
- [ ] Commits show incremental progress
- [ ] Commit history reflects iterative work

### Verification
```bash
# Check commit history
git log --oneline --graph --all

# Should show:
# - Multiple commits per day
# - Meaningful commit messages
# - Incremental changes
# - No huge commits at the end
```

---

## 📁 Evidence Folder Structure

Create this folder and add screenshots:

```
docs/evidence/
├── sprint1/
│   ├── pipeline-success.png
│   ├── pipeline-failure.png (if any)
│   ├── test-results.png
│   ├── coverage-report.png
│   └── api-demo-screenshots/
│       ├── health-endpoint.png
│       ├── create-task.png
│       ├── get-tasks.png
│       └── toggle-complete.png
└── sprint2/
    ├── pipeline-success.png
    ├── test-results.png
    ├── coverage-report.png
    └── api-demo-screenshots/
        ├── update-task.png
        ├── delete-task.png
        └── filter-tasks.png
```

**Action:** Create evidence folders
```bash
mkdir -p docs/evidence/sprint1/api-demo-screenshots
mkdir -p docs/evidence/sprint2/api-demo-screenshots
```

---

## 🎯 Final Verification

### Before Submission
- [ ] All code files present and working
- [ ] All documentation complete
- [ ] All templates filled in (not just templates)
- [ ] Screenshots captured and saved
- [ ] Git repository accessible
- [ ] README has correct repository URL
- [ ] No placeholder text remains
- [ ] All acceptance criteria met
- [ ] Definition of Done satisfied for all stories

### Quality Check
- [ ] Run application: `npm start` - works?
- [ ] Run tests: `npm test` - all pass?
- [ ] Check coverage: `npm run test:coverage` - >80%?
- [ ] Check commits: `git log` - incremental?
- [ ] Check pipeline: GitHub Actions - passing?

---

## 📦 Submission Package

### What to Submit

1. **GitHub Repository Link**
   - URL: `https://github.com/YOUR_USERNAME/agile-devops-prototype`
   - Ensure repository is public or accessible

2. **Documentation**
   - All files in `docs/` folder
   - All templates filled in completely

3. **Evidence**
   - All screenshots in `docs/evidence/`
   - Pipeline logs/screenshots
   - Test results screenshots

4. **Codebase**
   - All source code files
   - Working application
   - Complete test suite

---

## ⚠️ Common Mistakes to Avoid

1. ❌ Leaving template text unfilled
2. ❌ Generic retrospective comments ("We should communicate better")
3. ❌ Big-bang commits at the end
4. ❌ Missing screenshots
5. ❌ Tests not running in CI/CD
6. ❌ Incomplete acceptance criteria
7. ❌ No evidence of iterative work
8. ❌ Missing Definition of Done compliance

---

## ✅ Success Criteria

### Agile Practice (25%)
- ✅ Clear backlog with prioritization
- ✅ Acceptance criteria for all stories
- ✅ Proper sprint planning
- ✅ Story point estimates

### DevOps Practice (25%)
- ✅ CI/CD pipeline working
- ✅ Tests integrated in pipeline
- ✅ Basic monitoring/logging
- ✅ Evidence of pipeline runs

### Delivery Discipline (20%)
- ✅ Incremental commit history
- ✅ No big-bang commits
- ✅ Meaningful commit messages
- ✅ Iterative development shown

### Prototype Quality (20%)
- ✅ Solution is working
- ✅ Meets acceptance criteria
- ✅ All endpoints functional
- ✅ Tests passing

### Reflection (10%)
- ✅ Meaningful retrospectives
- ✅ Specific improvements identified
- ✅ Lessons learned documented
- ✅ Improvement between sprints shown

---

## 📞 Need Help?

If you're stuck:
1. Check `QUICKSTART.md` for step-by-step instructions
2. Review the templates - they guide you on what to write
3. Run tests locally before pushing
4. Check GitHub Actions tab for pipeline issues
5. Ensure all placeholders are filled in

---

**Last Updated:** [Date]  
**Status:** Ready for execution
