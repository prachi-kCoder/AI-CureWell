# data.py

from typing import List, Dict

advances_data: List[Dict] = [
    {
        "id": 1,
        "title": "Real-life WAKE study in narcolepsy patients with cataplexy treated with pitolisant and unresponsive to previous treatments.",
        "journal": "Revista de neurologia",
        "publishedDate": "2022-09-28",
        "condition": "Narcolepsy",
        "treatmentUsed": "Pitolisant",
        "url": "/publications/1"
    },
    {
        "id": 2,
        "title": "Characterization and management of facial angiofibroma related to tuberous sclerosis complex in the United States.",
        "journal": "Orphanet journal of rare diseases",
        "publishedDate": "2022-09-14",
        "condition": "Tuberous Sclerosis Complex",
        "treatmentUsed": "mTOR Inhibitor",
        "url": "/publications/2"
    },
    {
        "id": 3,
        "title": "Pituitary function and GH therapy in patients with Langerhans cell histiocytosis.",
        "journal": "European journal of endocrinology",
        "publishedDate": "2022-07-13",
        "condition": "Langerhans Cell Histiocytosis",
        "treatmentUsed": "Growth Hormone Therapy",
        "url": "/publications/3"
    },
    {
        "id": 4,
        "title": "Solriamfetol treatment of excessive daytime sleepiness in participants with narcolepsy or obstructive sleep apnea with a history of depression.",
        "journal": "Journal Of Psychiatric Research",
        "publishedDate": "September 07, 2022",
        "condition": "Narcolepsy",
        "treatmentUsed": "Solriamfetol",
        "url": "/publications/4"
    },{
        "id": 5,
        "title": "Long-term safety and maintenance of efficacy of sodium oxybate in the treatment of narcolepsy with cataplexy in pediatric patients.",
        "journal": "Journal Of Clinical Sleep Medicine : JCSM ",
        "publishedDate": "June 11, 2022",
        "condition": "Narcolepsy",
        "treatmentUsed": " Sodium Oxybate (SXB)",
        "url": "/publications/5"
        
    },{
        "id": 6,
        "title": "Satisfaction and seizure outcomes of epilepsy surgery in tuberous sclerosis: A Swedish population-based long-term follow-up study.",
        "journal": "Seizure ",
        "publishedDate": "October 24, 2022",
        "condition": "Tuberous Sclerosis Complex",
        "treatmentUsed": " Epilepsy Surgery",
        "url": "/publications/6"
        
    },{
        "id": 7,
        "title": "Tuberous sclerosis complex with skin lesions as the initial presentation: A case report and multidisciplinary discussion.",
        "journal": "Zhong Nan Da Xue Xue Bao. Yi Xue Ban = Journal Of Central South University. Medical Sciences ",
        "publishedDate": " August 30, 2022",
        "condition": "Tuberous Sclerosis Complex",
        "treatmentUsed": " Epilepsy Surgery",
        "url": "/publications/7"
        
    },{
        "id": 8,
        "title": "The role of neurosurgery in the management of tuberous sclerosis complex-associated epilepsy: a systematic review.",
        "journal": "Neurosurgical Focus",
        "publishedDate": "May 10, 2022",
        "condition": "Tuberous Sclerosis Complex",
        "treatmentUsed": " Neurosurgery",
        "url": "/publications/8"
    },{
        "id": 9,
        "title": "A mechanistic target of rapamycin inhibitor, everolimus safely ameliorated lupus nephritis in a patient complicated with tuberous sclerosis.",
        "journal": "Modern Rheumatology Case Reports ",
        "publishedDate": " May 05, 2022",
        "condition": "Tuberous Sclerosis Complex",
        "treatmentUsed": "Everolimus",
        "url": "/publications/9"
        
    },
    {
        "id":10,
        "title":"Prevalence of antidepressant-induced sexual dysfunction among psychiatric outpatients attending a tertiary care hospital",
        "Journal": "Neurosciences (Riyadh, Saudi Arabia)",
        "publishedDate": " May 05, 2022",
        "condition": "Depression",
        "treatmentUsed": "Fluoxetine, Paroxetine, Venlafaxine, or Mirtazapine",
        "url": "/publications/10" 
    }
]

detailed_advances_data: List[Dict] = [
    {
        "id": 1,
        "title": "Real-life WAKE study in narcolepsy patients with cataplexy treated with pitolisant and unresponsive to previous treatments.",
        "journal": "Revista De Neurologia",
        "treatmentUsed": "Pitolisant",
        "numberOfPatients": 32,
        "published": "September 28, 2022",
        "summary": "This study analyzed the safety and effectiveness of pitolisant in the treatment of patients with narcolepsy.",
        "conclusion": "In patients with narcolepsy, treatment with pitolisant can provide improvements.",
        "abstract": "Introduction: Type 1 narcolepsy is a disabling disease that requires continuous treatment, which is not always effective....",
        "results": "In 32 patients included (mean age, 44 years; 37.5% women) the mean of the Epworth Sleepiness Scale was reduced from 17.1 to 13.5; 47.8% of the patients improved from their cataplexy."
    }
    ,{
        "id": 2,
        "title": "Use of cannabidiol in the treatment of epilepsy: Lennox-Gastaut syndrome, Dravet syndrome, and tuberous sclerosis complex.",
        "journal": "Revista Da Associacao Medica Brasileira (1992)",
        "treatmentUsed": "Cannabidiol (CBD)",
        "numberOfPatients": 1034,
        "published": " November 23, 2022",
        "summary": "This review of literature evaluated the effectiveness, safety, and tolerability of cannabidiol (CBD) in children and adults with Dravet syndrome (genetic disorder that causes a form of epilepsy with prolonged seizures that are often triggered by hot temperatures or fever; SD), Lennox-Gataut syndrome (form of severe epilepsy that begins in childhood; LGS), or tuberous sclerosis complex (genetic disease that causes non-cancerous tumors to grow in the brain and on other vital organs; TSC), with inadequate control of seizures (uncontrolled electrical activity between brain cells that causes temporary abnormalities in muscle tone or movements).",
        "conclusion": " This review supports the use of cannabidiol in the treatment of patients with seizures (uncontrolled electrical activity between brain cells that causes temporary abnormalities in muscle tone or movements) resistant to common medications in patients with Dravet syndrome (genetic disorder that causes a form of epilepsy with prolonged seizures that are often triggered by hot temperatures or fever), Lennox-Gataut syndrome (form of severe epilepsy that begins in childhood), or tuberous sclerosis complex (genetic disease that causes non-cancerous tumors to grow in the brain and on other vital organs) with benefits in reducing seizures and tolerable toxicity",
        "abstract": "Objective: The objective of this systematic review with meta-analysis was to evaluate the efficacy, safety, and short- and long-term tolerability of cannabidiol (CBD), as an adjunct treatment, in children and adults with Dravet syndrome (SD), Lennox-Gataut syndrome (LGS), or tuberous sclerosis complex (TSC), with inadequate control of seizures.Methods: This systematic review was conducted through a search for scientific evidence in the Mediline/PubMed, Central Cochrane, and ClinicalTrials.gov databases until April 2022. Selected randomized clinical trials (RCTs) that presented the outcomes: reduction in the frequency of seizures and total seizures (all types), number of patients with a response greater than or equal to 50%, change in caregiver global impression of change (CGIC)",
        "results": "Notably, six RCTs were included, with a total of 1,034 patients with SD, LGS, and TSC, of which 3 were open-label extension RCTs. The meta-analysis of the studies showed that the use of CBD as compared with placebo, in patients with convulsive seizures refractory to the use of medications, reduces the frequency of seizures by 33%; increases the number of patients with a reduction ≥50% in the frequency of seizures by 20%; increases the number of patients with absence of seizures by 3%; improves the clinical impression evaluated by the caregiver or patient (S/CGIC) in 21%; increases total AEs by 12%; increases serious AE by 16%."
        
    },
    {
        "id": 3,
        "title": "Pituitary function and the response to GH therapy in patients with Langerhans cell histiocytosis: analysis of the KIMS database.",
        "journal": "European Journal Of Endocrinology",
        "treatmentUsed": "Growth Hormone (GH) Therapy",
        "numberOfPatients": 81,
        "published": "July 13, 2022",
        "summary": "This study presented the effectiveness of growth hormone (GH) therapy in the treatment of patients with Langerhans cell histiocytosis (LCH)",
        "conclusion": "In patients with Langerhans cell histiocytosis, treatment with growth hormone therapy was safe and provided improvement.",
        "abstract": "To analyze the effectiveness and safety of growth hormone (GH) replacement treatment in adult patients with Langerhans cell histiocytosis (LCH) and GH deficiency (GHD) enrolled in KIMS (Pfizer International Metabolic Database). Patients with LCH and GHD were studied at baseline and some of them after 1 year of GH treatment. The effectiveness of GH is presented as change after 1 year of treatment (mean, 95% CI). The LCH population was compared to two other groups of patients enrolled in KIMS, granulomatous and lymphocytic hypophysitis. At baseline, 81 adults with LCH (27 with childhood onset, 56% females), mean age at GHD onset of 29 (15) years were studied. Diabetes insipidus was diagnosed in 86% of patients. Analysis of 1 year of GH treatment was possible in 37 patients. One-year cross-sectional values for the GH dose were 0.39 (s.d.± 0.21) mg and -0.5 (-1.2 to 0.2) for insulin-like growth factor-1 s.d. Total cholesterol decreased 0.9 (-1.5 to -0.3 (mmol/L); P < 0.05); AGHDA-QoL-score (n = 20) was improved by 2.8 points (-5.6 to 0.0; P < 0.05), while mean BMI increased 0.6 ± 3 kg/m2 (95% CI: -0.2 to 1.4). All these effects did not differ from the two other groups after adjusting for age, gender, and baseline values. In 20 of 77 patients included in the safety analysis, 36 serious adverse events were reported during 435 patient-years (82.8/1000); no new safety signals were reported. After 1 year of GH treatment in patients with LCH, metabolic variables and quality of life improved, with no new safety signals.",
        "results": " In patients with Langerhans cell histiocytosis, treatment with growth hormone therapy was safe and provided improvement."
        
    },
    {
        "id": 4,
        "title": "Solriamfetol treatment of excessive daytime sleepiness in participants with narcolepsy or obstructive sleep apnea with a history of depression.",
        "journal": "Journal Of Psychiatric Research",
        "treatmentUsed": " Solriamfetol",
        "numberOfPatients": 22,
        "published": "September 07, 2022",
        "summary": "This study evaluated the effects of solriamfetol in the treatment of patients with narcolepsy or obstructive sleep apnea (OSA) with or without depression.",
        "conclusion": "In patients with narcolepsy, treatment with pitolisant can provide improvements.",
        "abstract": "Given the high rate of depression associated with narcolepsy or obstructive sleep apnea (OSA), this analysis compared effects of solriamfetol treatment of excessive daytime sleepiness (EDS) in participants with/without a history of depression (DHx+/DHx-). This secondary analysis included data from two randomized, controlled trials in which participants were randomized to 12 weeks placebo or solriamfetol 37.5 (OSA only), 75, 150, or 300 mg/day. Efficacy/safety (combined solriamfetol doses) was summarized for DHx+/DHx-subgroups. 27.5% (65/236) with narcolepsy and 23.4% (111/474) with OSA were DHx+. In narcolepsy (DHx+ and DHx-), 40-min Maintenance of Wakefulness Test (MWT40) mean sleep latency increased (5.4 and 7.0 min), Epworth Sleepiness Scale (ESS) score decreased (3.8 and 3.5 points), and percentage of participants improved on Patient Global Impression of Change (PGI-C) was higher (31.7% and 39.4%) relative to placebo. In OSA (DHx+ and DHx-), MWT40 mean sleep latency increased (7.7 and 10.7 min), ESS decreased (3.5 and 3.7 points), and percentage of participants improved on PGI-C was higher (41.1% and 29.4%) relative to placebo. Common treatment-emergent adverse events (headache, decreased appetite, nausea, anxiety) were similar in DHx+/DHx-. This study suggests that safety and efficacy of solriamfetol for treating EDS in narcolepsy and OSA are not affected by depression history. Moreover, the findings emphasize the high prevalence of depression in people with sleep disorders and suggest that increased awareness of this association may have clinical significance.",
        "results": "In patients with narcolepsy or obstructive sleep apnea with or without depression, treatment with solriamfetol is safe and effective."
        
    },
    {
        "id": 5,
        "title": "Long-term safety and maintenance of efficacy of sodium oxybate in the treatment of narcolepsy with cataplexy in pediatric patients.",
        "journal": "Journal Of Clinical Sleep Medicine : JCSM : Official Publication Of The American Academy Of Sleep Medicine",
        "treatmentUsed": "Sodium Oxybate (SXB)",
        "numberOfPatients": 106,
        "published": "June 11, 2022",
        "summary": "This study evaluated the safety and effectiveness of sodium oxybate (SXB) for the treatment of pediatric patients with narcolepsy with cataplexy (loss of muscle tone).",
        "conclusion": " In pediatric patients with narcolepsy with cataplexy (loss of muscle tone), treatment with sodium oxybate is safe and effective.",
        "abstract": "Objectives: Evaluate long-term efficacy and safety of sodium oxybate (SXB) in children and adolescents (aged 7-16 years) with narcolepsy with cataplexy ,Methods: A double-blind randomized withdrawal study was conducted. Prior to randomization, SXB-naive participants were titrated to an efficacious and tolerable dose of SXB; participants taking SXB entered on their established dose. Following a 2-week stable-dose period and 2-week, double-blind, randomized withdrawal period, participants entered an open-label period (OLP; ≤ 47 weeks).",
        "results": "Of 106 enrolled participants, 95 entered and 85 completed the OLP. In SXB-naive participants and participants previously taking SXB, efficacy of SXB established prior to the double-blind, randomized withdrawal period was maintained throughout the OLP for number of weekly cataplexy attacks (median [quartile 1, quartile 3] change from the stable-dose period to end of the OLP: 0.0 [-2.5, 4.9] and 0.0 [-3.4, 2.6], respectively) and ESS-CHAD scores (0.0 [-3.0, 2.5] and 1.0 [-3.0, 3.0], respectively). The median (quartile 1, quartile 3) number of cataplexy-free days per week was 2.3 (0.0, 6.0) in OLP week 1 and 3.8 (0.5, 5.5) in week 48."
        
    },
    {
        "id": 6,
        "title": "Satisfaction and seizure outcomes of epilepsy surgery in tuberous sclerosis: A Swedish population-based long-term follow-up study.",
        "journal": "Seizure",
        "treatmentUsed": "Pitolisant",
        "numberOfPatients": 22,
        "published": " October 24, 2022",
        "summary": "This study evaluated outcomes for epilepsy surgery in the treatment of patients with tuberous sclerosis complex (TSC).",
        "conclusion": "In patients with tuberous sclerosis complex, treatment with epilepsy surgery is effective.",
        "abstract": "Objective: We conducted a cross-sectional study to evaluate long-term outcomes of epilepsy surgery in tuberous sclerosis complex (TSC) in a Swedish population.Methods: Demographic and seizure data was retrieved from the Swedish National Epilepsy Surgery Registry and medical records. Patient reported outcome measurements (PROM) were determined by telephonic interviews at long term follow-up.",
        "results": " Median follow-up was 6 y 8 m (range, 3-15 y 1 m) for tuberectomies (n = 15) and 3 y 6 m (range 2-10 y) for callosotomies (n = 7). Eight of the 15 tuberectomy participants were seizure-free. Four out of seven callosotomies were free from drop attacks. PROMs were provided by caregivers of 18/20 participants (data missing for two callosotomies). In the tuberectomy group, 6/8 patients were seizure-free and 3/7 had continued seizures; surgery was considered satisfactory and beneficial. Overall, satisfaction was high, even among patients who did not achieve remission; 13/15 tuberectomy responders recommended surgery to others with TSC and refractory epilepsy. None of the patients considered the surgery harmful. In the callosotomy group, satisfaction was low and congruent with the seizure outcome. All patients with continued drop attacks were unsatisfied; one considered surgery to be harmful. One participant, who would not recommend surgery to others, still perceived the surgery to be beneficial."
        
    },
    {
        "id": 7,
        "title": "Tuberous sclerosis complex with skin lesions as the initial presentation: A case report and multidisciplinary discussion.",
        "journal": " Zhong Nan Da Xue Xue Bao. Yi Xue Ban = Journal Of Central South University. Medical Sciences",
        "treatmentUsed": "Everolimus",
        "numberOfPatients": 80,
        "published": "August 30, 2022",
        "summary": "This case report describes a young female patient with tuberous sclerosis complex with facial angiofibroma.",
        "conclusion": "A young female patient with tuberous sclerosis complex with facial angiofibroma was treated with everolimus.",
        "abstract": "We reported a case of tuberous sclerosis complex with facial angiofibroma as the initial presentation and conducted a multidisciplinary discussion. The patient, a young female, was admitted to the Department of Dermatology for cosmetic purpose. After the examination, she was found to have multiple system involvement, including a large renal angiomyolipoma pressing on the liver. She never had any subjective symptom. After consultation by the multidisciplinary team of tuberous sclerosis complex, the patient was treated with everolimus orally and followed up regularly. It is suggested that dermatologists should pay attention to the systemic involvement of patients with tuberous sclerosis complex. Early intervention can prolong the life of patients and improve their life quality. Multidisciplinary collaboration for lifelong disease management is the key to enhance the diagnosis and treatment for tuberous sclerosis complex and enhance the prognosis of patients.",
        "results": "In 32 patients included (mean age, 44 years; 37.5% women) the mean of the Epworth Sleepiness Scale was reduced from 17.1 to 13.5; 47.8% of the patients improved from their cataplexy."
        
    },
    {
        "id": 8,
        "title": "The role of neurosurgery in the management of tuberous sclerosis complex-associated epilepsy: a systematic review.",
        "journal": "Neurosurgical Focus",
        "treatmentUsed": "Pitolisant",
        "numberOfPatients": 1157,
        "published": "May 10, 2022",
        "summary": "This study evaluated the outcomes following surgical treatment for tuberous sclerosis complex (genetic disease that causes non-cancerous tumours to grow in the brain and on other vital organs such as the kidneys, heart, liver, eyes, lungs and skin; TSC)-associated epilepsy (disorder in which brain activity becomes abnormal, causing seizures or periods of unusual behavior, sensations, and sometimes loss of awareness).",
        "conclusion": "Surgery effectively controls seizures (sudden, uncontrolled electrical disturbance in the brain) in select patients with tuberous sclerosis complex (genetic disease that causes non-cancerous tumours to grow in the brain and on other vital organs such as the kidneys, heart, liver, eyes, lungs and skin)-associated epilepsy (disorder in which brain activity becomes abnormal, causing seizures or periods of unusual behavior, sensations, and sometimes loss of awareness), but outcomes vary.",
        "abstract": "Objective: Tuberous sclerosis complex (TSC) is an autosomal dominant, multisystem neurocutaneous disorder associated with cortical tubers, brain lesions seen in nearly all patients with TSC, which are frequently epileptogenic. Seizures are often the earliest clinical manifestation of TSC, leading to epilepsy in over 70% of patients. Medical management with antiepileptic drugs constitutes early therapy, but over 50% develop medically refractory epilepsy, necessitating surgical evaluation and treatment. The objective of this study was to summarize the literature and report seizure outcomes following surgical treatment for TSC-associated epilepsy. METHOD :A systematic literature review was performed in accordance with the PRISMA guidelines. The PubMed and Embase databases were searched for journal articles reporting seizure outcomes following epilepsy surgery in TSC patients. Included studies were placed into one of two groups based on the surgical technique used. Excellent and worthwhile seizure reductions were defined for each group as outcomes and extracted from each study.",
        "results": "A total of 46 studies were included. Forty of these studies reported seizure outcomes following any combination of resection, disconnection, and ablation on a collective 1157 patients. Excellent and worthwhile seizure reductions were achieved in 59% (683/1157) and 85% (450/528) of patients, respectively. Six of these studies reported seizure outcomes following treatment with neuromodulation. Excellent and worthwhile seizure reductions were achieved in 34% (24/70) and 76% (53/70) of patients, respectively."
        
    }
    ,{
        "id": 9,
        "title": "A mechanistic target of rapamycin inhibitor, everolimus safely ameliorated lupus nephritis in a patient complicated with tuberous sclerosis.",
        "journal": "Modern Rheumatology Case Reports",
        "treatmentUsed": " Everolimus",
        "numberOfPatients": 2,
        "published": "May 15, 2022",
        "summary": "This case report describes a 26-year-old woman with lupus nephritis with tuberous sclerosis (TSC) treated with everolimus.",
        "conclusion": " A woman with lupus nephritis with tuberous sclerosis was successfully treated with everolimus.",
        "abstract": "A 26-year-old woman with tuberous sclerosis complex (TSC) received outpatient treatment for the complication of systemic lupus erythematosus (SLE) at our hospital. She visited our hospital with a chief complaint of pitting oedema in bilateral lower legs for 3 days. The urinalysis showed massive proteinuria with a lot of white blood cell casts. The blood tests revealed hypoalbuminaemia, hypercholesterolaemia, hypocomplementaemia, and elevated anti-double-stranded DNA antibody titre. Renal biopsy was not performed because of multiple renal angiomyolipomas, which was one of the features of TSC. She was diagnosed with a nephrotic state due to lupus nephritis. Although she had a standard therapy with high-dose corticosteroid and mycophenolate mofetil and tacrolimus, complete remission had not been achieved leading to a steroid-dependent nephrotic syndrome. During the follow-up, the angiomyolipomas became larger and had a risk of rupture at the age of 29 years. Everolimus, a mechanistic target of rapamycin (mTOR) inhibitor, was started for the treatment of angiomyolipomas, and mycophenolate mofetil and tacrolimus were terminated instead. The activity of lupus nephritis was surprisingly ameliorated, and the amount of corticosteroid successfully tapered. Everolimus has been continued for 6 years without severe side effects. Accumulating evidence suggests that the activated mTOR pathway plays a key role in the pathogenesis of SLE. We reported the long-term efficacy and safety of everolimus for refractory SLE in a patient with TSC for the first time. This case suggests that everolimus can be a promising option for the treatment of lupus nephritis.",
        "results": "A woman with lupus nephritis with tuberous sclerosis was successfully treated with everolimus."
        
    },
    {
        "id": 10,
        "title": "Prevalence of antidepressant-induced sexual dysfunction among psychiatric outpatients attending a tertiary care hospital.",
        "journal": "Neurosciences (Riyadh, Saudi Arabia)",
        "treatmentUsed": "Fluoxetine, Paroxetine, Venlafaxine, or Mirtazapine",
        "numberOfPatients": 137,
        "published": "January 27, 2020",
        "summary": "This study evalauted sexual dysfunction (problem that prevents someone from wanting or enjoying sexual activity) in patients taking antidepressants including fluoxetine, paroxetine, venlafaxine or mirtazapine.",
        "conclusion": "Sexual dysfunction (problem that prevents someone from wanting or enjoying sexual activity) is common in patients treated with antidepressants, especially selective serotonin reuptake inhibitors (a widely used type of antidepressant). Addressing side effects can lead to better treatment outcomes and prevent relapse.",
        "abstract": "Objective: To measure the prevalence of sexual dysfunction in psychiatric outpatients treated with fluoxetine, paroxetine, venlafaxine or mirtazapine. METHODS:This is a retrospective cross-sectional study conducted in Sultan Qaboos University Hospital, Muscat, Oman. All patients above 18 years of age, attending psychiatric clinic and taking fluoxetine, paroxetiene, venlafaxine or mirtazapine for various indications were invited to participate in the study. A data collection sheet was designed to document the patients` demographic features, psychiatric diagnosis, type, dose and duration of antidepressant treatment. Sexual side effects` part of Toronto Side Effect Scale (TSES) was used to assess the presence of sexual dysfunction",
        "results": "In 32 patients included (mean age, 44 years; 37.5% women) the mean of the Epworth Sleepiness Scale was reduced from 17.1 to 13.5; 47.8 of the patients improved from their cataplexy."   
    }
]
