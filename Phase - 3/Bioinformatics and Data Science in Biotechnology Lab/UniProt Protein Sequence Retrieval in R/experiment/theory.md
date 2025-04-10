Prediction of protein sequences y high-throughput genome sequencing expands the large-scale need of proteomics. There has been a need for understanding protein sequence repository and systematic analysis of protein annotation and standardization of protein data from the existing resources. It has been noted that new data types have been introduced with high-throughput technologies in proteomics and genomics for providing opportunities in biomedical sciences and life sciences domain. Identifying experimental characterizations of proteins and integrating the knowledge with annotation approaches were of keen interest in bioinformatics applications. Such data integration method provides diverse information from different resources providing a comprehensive overview of the protein data to the scientific community. In a broader sense, the ability for storing and interconnecting the available protein data information is noted as crucial in modern biological research applications.

The Universal Protein Resource (UniProt) is freely accessible central resource that provides stable and comprehensive details on protein sequences and functional annotation. It is of primarily important in scientific community as the protein sequences were fully classified accurately with extensive cross-referencing and maximum querying interfaces thereby providing interconnection with information from pool of disparate resources.  UniProt Consortium is formed in 2002, which is collaboration between European Bioinformatics Institute (EBI), the Protein Information Resource (PIR) and the Swiss Institute of Bioinformatics (SIB). By means of computational analysis, and sequence archiving, this consortium functions in manual curation  of protein sequences of interest and develop a user-friendly web platform that cross-references to other databases providing value added information of protein sequences thereby maintaining a high quality database. 

&nbsp;

The main applications of Uniprot are

 1. Identifying protein sequences and functional information for research application in life science domains. 
 2. Provides detailed information on biological function of proteins. 
 3. Provides evolutionary relationships of protein sequence of interest. 
 4. Studying the functional properties of proteins in detail. 
 5. Understanding the biological properties of a specific protein that were involved in a biological reaction.  
 6. Understanding the translation and post-translation modifications in proteins. 
 7. Provides overview of a protein interaction with other biological molecules. 
 8. Helps in localizing the presence of a specific protein in cells or higher organisms.


&nbsp;

UniProt has four major components with optimized usage functions. They are 

 1. the UniProt Knowledgebase (UniProtKB)
 2. the UniProt Reference Clusters  (UniRef)
 3. the UniProt Archive (UniParc)
 4. the UniProt Metagenomic and Environmental Sequences database (UniMES)

&nbsp;

UniProt Knowledgebase is divided into two sections UniProtKB/Swiss-Prot and UniProtKB/TrEMBL, where UniProtKB/Swiss-Prot is manually curated and UniProtKB/TrEMBL is maintained automatically. The annotations were accurately performed by biologists having specific expertise in protein sequence annotation. UniProtKB is the central access point for extensive curated protein information providing information of functions of the selected protein, specific enzymes and enzyme-specific reactions, active domains, post-translational modifications, specific expression of protein in sub-cellular regions, formation of isoforms, genetic variants associated with a disease and related abnormalities. UniProtKB/TrEMBL followed general rules such as Spearmint rules, HAMAP family rules and PIRSF classification-based name rules for automatic annotation and classification.  It included coding sequences translational sequences and PDB structure data of amino acids with defined priorities.

&nbsp;

UniRef have been applied in genome annotation, system biology applications, understanding structural genomics of protein sequences, classification of protein family, understanding phylogenic relationships and mass spectrometry calculations. (UniParc) is a repository that provides historical aspects of protein sequences. It records information without annotation. UniMES has data related to metagenomics with reference to Global Ocean Sampling Expedition (GOS) and International Nucleotide Sequence Databases (INSDC). Gathered information was available in ftp site in FASTA format. 

&nbsp;

**UniProt Protein Sequence Retrieval in R**

Like NCBI sequence Uniprot also has RefSeq but the manually annoted information quality in UniProt is greater than that in RefSeq. Accesion numbers were assigned to individual protein sequences in Uniprot database. Another method to retrieve a UniProt protein sequence is by the use of  the SeqinR package to query the ACNU sub-database “swissprot”, which contains protein sequences from UniProt.  Use the query () function from SeqinR to query protein sequence.
UniProt data were downloaded from www.uniprot.org 



&nbsp;

Example

 1. Retrieve the protein sequence for chorismate lyase protein in Mycobacterium leprae (Uniprot accession Q9CD83) and Mycobacterium ulcerans (Uniprot Accession A0PQ23).
 2. Save the sequence date in FASTA format.
 3. Save the sequence data in My documents folder of personal computer.
