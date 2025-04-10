A major goal in computational sequence analysis is to identify sequence similarities for understanding the structural and functional conservation and evolutionary relationships among the biological sequences of interest. Sequence analysis has become an indispensible element in scientific analysis; on the DNA level it identifies the functional genes in a newly sequenced genome with existing sequence in database. It helps in predicting the location and function of protein- coding and transcription regulation regions in genomic DNA. On a protein level, it functions in generating reasonable hypothesis related to structural and functional properties of particular proteins. 
 A biological sequence is a continuous molecule of nucleotides or amino acid residues. A typical DNA has four nucleotides, namely adenine (A), guanine (G), cytosine (C), and thymine (T), however in RNA sequence thymine is replaced by the nucleotide uracil (U) as complementary to adenine nucleotide. A protein sequence is composed of amino acids, which determines the physiochemical properties of proteins and different conformations in a three-dimensional space. A Sequence Alignment in bioinformatics helps in investigating similarities and differences existing at a sequence levels in poly-nucleic acids or protein structures. The algorithm works as dynamic programming approach dividing a given problem into smaller independent sub problems and finding the alignment more quantitatively by assigning scores. 
 

## Sequence Alignment Methods

Sequence alignment is a method for arranging a known sequence of DNA, RNA or protein with an unknown sequence or between two unknown sequences. The known biological sequence is the reference sequence and the unknown sequence is the query sequence. Similar biological sequences share similar secondary and three dimensional structures, functional properties and common ancestor and known to be hey are homologous sequence. 

Sequence Alignment is classified on the basis of sequence length and number of sequences.
On the basis of sequence length, the sequence alignment is of two types. 
1.	**Global Alignment**: In global alignment, sequences are aligned that covers both sequences entirely for matching identical sequences.  It compares genes or proteins with same function. 

        Sequence 1         G A A T T C

        Sequence 2        G A  -   T T A

2.	**Local Alignment**: Here, the biological sequences are aligned to find region of higher similarity. It looks for local similarities in larger sequences such as newly sequenced genomes. 

       Sequence 1         A T G G C C T C

      Sequence 2          A C G G C     T C


On the basis of number of sequences, sequence alignment is classified into two groups.

1.	**Pair wise sequence alignment:** It is the lining up of two biological sequences for achieving maximal identity for assessing similarity and sequence homology. This alignment identifies common features of sequences such as shared domain, catalytic domains, disulphide bridges and for genome analysis.
 
           Sequence 1     A C T C G A G T C 

           Sequence 2     A T T C -  A  G C C



3.	**Multiple Sequence Alignment:** It generally aligns three or more biological sequence of similar length for identifying sequence conservation and structural relationships. This helps in Phylogenetic analysis, homology modeling for protein structure and motifs detection. 
          
         Sequence 1     C A T G C G A G T A 

         Sequence 2     C A T G  -   -   -  G T A

         Sequence 3    C C T G  – G A  G T A

          
**Importance of FASTA format in biological sequences**

A basic framework to study bioinformatics and computational biology is to learn about biological sequences and sequence analysis. To understand sequence representation is of primary importance in learning sequence analysis algorithms. One of the most common file formats in bioinformatics is the FASTA file format. FASTA format is a text file for representing nucleotide sequences or peptide sequences, where base pairs or amino acids in biological sequence are represented using single-letter codes. A FASTA format sequence starts with a single-line description with a > Symbol followed by sequence data.  This sequence representation is first used by the FASTA program for sequence alignment.

Example of a FASTA format
>AAB30058.2 keratin, partial [Homo sapiens]
VTLARTDLEMQIEGLKEELAYLRKNHEEEMLALRGQTGGDVNVEMDAAPGVDLSRILNEMRDQYEQMAEKNRRDAETWFLSKTEELNKEVASNSELVQSSRSEVTELRRVLQGLEIELQSQLSTKASLENSLEETKGRYCMQLSQIQGLIGSVEEQLAQLRCEMEQQSQEYQILLDVKTRLEHEIATYRRLLXGEDAHLSSQQASGQSYSSREVFTSSSSSSSRQTRPILKEQSSSSFSQGQSS
Reading and Writing Sequence data as FASTA file using R
R packages have been widely employed in bioinformatics for performing a wide variety of analyses. With the standard R installation add-ons need to be loaded for running R programming functions. SeqinR package helps in retrieving sequences from a DNA sequence database, for carrying out simple DNA sequence analyses.



Bioconductor set of R packages (www.bioconductor.org) has packages for R programming for analyzing biological data sets such as microarray data. 
SeqinR package (pbil.univ-lyon1.fr/software/seqinr/home.php?lang=eng) works for retrieving DNA sequences and protein sequence databases, DNA and protein sequences analyses. 