from django import forms

class ContactForm(forms.Form):
    name = forms.CharField()
    email = forms.EmailField(label='E-mail')
    # label : lam truc quan hon
    category = forms.ChoiceField(choices=[('question', 'Question'),('other', 'Other')])
    subject = forms.CharField( required= False)
    body = forms.CharField(widget= forms.Textarea) 