import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from './config';

MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);

  db.collection('contests').insertMany([
    { id: 1, categoryName: 'Computer Vision', contestName: 'Freshman',
      description: `
      Computer vision is an interdisciplinary field that deals with how computers can be made for gaining high-level understanding from digital images or videos.
      From the perspective of engineering, it seeks to automate tasks that the human visual system can do.
      Computer vision tasks include methods for acquiring, processing, analyzing and understanding digital images, and extraction of high-dimensional data from the real world in order to produce numerical or symbolic information, e.g., in the forms of decisions.
      Understanding in this context means the transformation of visual images (the input of the retina) into descriptions of the world that can interface with other thought processes and elicit appropriate action.
      This image understanding can be seen as the disentangling of symbolic information from image data using models constructed with the aid of geometry, physics, statistics, and learning theory.
      `,
      nameIds: [101, 102] },
    { id: 2, categoryName: 'Data Structures', contestName: 'Junior',
      description: `
      In computer science, a data structure is a particular way of organizing data in a computer so that it can be used efficiently.
      Data structures can implement one or more particular abstract data types (ADT), which specify the operations that can be performed on a data structure and the computational complexity of those operations.
      In comparison, a data structure is a concrete implementation of the specification provided by an ADT.
      `,
      nameIds: [] },
    { id: 3, categoryName: 'Data Mining', contestName: 'Sophomore',
    description: `
    Data mining is the computing process of discovering patterns in large data sets involving methods at the intersection of machine learning, statistics, and database systems.
    It is an interdisciplinary subfield of computer science.
    The overall goal of the data mining process is to extract information from a data set and transform it into an understandable structure for further use.
    Aside from the raw analysis step, it involves database and data management aspects, data pre-processing, model and inference considerations, interestingness metrics, complexity considerations, post-processing of discovered structures, visualization, and online updating.
    Data mining is the analysis step of the "knowledge discovery in databases" process, or KDD.
    `,
      nameIds: [103, 104, 105] },
    { id: 4, categoryName: 'Data Analysis', contestName: 'Senior',
    description: `
    Data analysis, also known as analysis of data or data analytics, is a process of inspecting, cleansing, transforming, and modeling data with the goal of discovering useful information, suggesting conclusions, and supporting decision-making.
    Data analysis has multiple facets and approaches, encompassing diverse techniques under a variety of names, in different business, science, and social science domains.
    `,
      nameIds: [] }
  ]).then(response => {
    console.info('Contests', response.insertedCount);
    db.collection('names').insertMany([
      { id: 101, name: 'Mind Assembly', timestamp: new Date() },
      { id: 102, name: 'Brain Scaffold', timestamp: new Date() },
      { id: 103, name: 'Cash View', timestamp: new Date() },
      { id: 104, name: 'Currency Map', timestamp: new Date() },
      { id: 105, name: 'Cash Board', timestamp: new Date() },
      { id: 106, name: 'RootLib', timestamp: new Date() },
    ]).then(response => {
      console.info('Names', response.insertedCount);
      db.close();
    });
  });
});
