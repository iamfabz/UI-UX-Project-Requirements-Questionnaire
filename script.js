function saveAnswers() {
    window.print();
    const form = document.getElementById('questionnaire-form');
    const formData = new FormData(form);
    const answers = {};
    for (const [key, value] of formData.entries()) {
        answers[key] = value;
    }
    console.log('Answers:', answers);
}
